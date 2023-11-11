import Head from "next/head";
import { HeroSection, ServicesMarquee } from "@/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <HeroSection />
      <ServicesMarquee />
    </>
  );
};

export default HomePage;
