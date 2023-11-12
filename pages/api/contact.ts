import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.method !== "POST" ||
    !req.body.token ||
    req.body.name.length > 255 ||
    req.body.email.length > 255 ||
    req.body.text.length > 1000
  ) {
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

  await prisma.message.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      text: req.body.text,
    },
  });

  res.status(201).end();
};

export default handler;
