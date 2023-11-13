import Head from "next/head";
import {
  Faq,
  HeroSection,
  ProcessSection,
  ServicesMarquee,
  VisionsSection,
} from "@/components/organisms";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Zontaz</title>
        <meta
          name="description"
          content="Zontaz: We create awesome websites that make your business shine online. From design to SEO, we've got it covered. Get a free quote today."
        />
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
