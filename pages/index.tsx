import Head from "next/head";
import {
  Faq,
  HeroSection,
  ProcessSection,
  ServicesMarquee,
  VisionsSection,
} from "@/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <HeroSection />
      <ServicesMarquee />
      <ProcessSection />
      <VisionsSection />
      <Faq />
    </>
  );
};

export default HomePage;
