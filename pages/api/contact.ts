import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST" || !req.body.token) {
    res.status(400).end();
    return;
  }

  const { data } = await axios.post(
    process.env.RECAPTCHA_VERIFICATION_URL!,
    {
      event: {
        token: req.body.token,
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      },
    },
    { params: { key: process.env.RECAPTCHA_API_KEY } }
  );

  if (data.riskAnalysis.score < 0.1) {
    res.status(400).end();
    return;
  }

  res.status(201).end();
};

export default handler;
