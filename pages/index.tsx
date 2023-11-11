import Head from "next/head";
import {
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
    </>
  );
};

export default HomePage;
