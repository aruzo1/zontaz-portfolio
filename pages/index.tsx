import { HeroSection, Navbar } from "@/components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="w-full h-[500px] mt-16 md:mt-24 pt-16 md:pt-24 rounded-t bg-neutral-100">
        <h2 className="container text-6xl text-black font-bold">About Us</h2>
      </section>
    </>
  );
};

export default HomePage;
