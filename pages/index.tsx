import { HeroSection, Navbar, ProcessSection } from "@/components";
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
      <section className="h-[500px] -mt-6 pt-16 md:pt-24 rounded-t bg-neutral-100" />
    </>
  );
};

export default HomePage;
