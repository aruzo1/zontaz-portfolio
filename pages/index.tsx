import Head from "next/head";
import { HeroSection } from "@/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <HeroSection />
    </>
  );
};

export default HomePage;
