import { FaqSection, HeroSection, ProcessSection } from "@/components";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <HeroSection />
      <ProcessSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
