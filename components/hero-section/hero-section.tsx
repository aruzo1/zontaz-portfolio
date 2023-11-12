import { HeroText } from "./hero-text";
import { HeroProjects } from "./hero-projects";

export const HeroSection = () => {
  return (
    <main className="relative pt-32 pb-16 xl:py-24">
      <div className="overflow-hidden">
        <div className="container flex items-center gap-16">
          <HeroText />
          <HeroProjects />
        </div>
      </div>

      <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
      <div
        className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                    to-transparent to-70%`}
      />
    </main>
  );
};
