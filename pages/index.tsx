import { Footer, HeroSection, Navbar, ProcessSection } from "@/components";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
      </Head>

      <Navbar />
      <HeroSection />
      <ProcessSection />
      <Footer />
    </>
  );
};

export default HomePage;
