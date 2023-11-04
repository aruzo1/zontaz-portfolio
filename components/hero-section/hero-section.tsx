import { HeroCarousel } from "./hero-carousel";
import { HeroText } from "./hero-text";

export const HeroSection = () => {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-[7.5rem] bg-neutral-950">
      <HeroText />
      <HeroCarousel />
    </main>
  );
};
