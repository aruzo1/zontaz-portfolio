import { Showcase } from "@/components/organisms";
import Head from "next/head";

const ShowcasePage = () => {
  return (
    <>
      <Head>
        <title>Showcase - Zontaz</title>
        <meta
          name="description"
          content="See the best of Zontaz on our showcase page. Check out our work, get inspired for your own amazing website!"
        />
      </Head>

      <Showcase />
    </>
  );
};

export default ShowcasePage;
