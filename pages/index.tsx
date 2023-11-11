import Head from "next/head";
import { HeroSection, ProcessSection, ServicesMarquee } from "@/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <HeroSection />
      <ServicesMarquee />
      <ProcessSection />
    </>
  );
};

export default HomePage;
