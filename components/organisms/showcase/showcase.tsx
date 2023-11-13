import { PROJECTS } from "@/lib/constants";
import { ShowcaseProject } from "./showcase-project";

export const Showcase = () => {
  return (
    <section className="relative pt-40 pb-24">
      <div className="container">
        <div className="text-center">
          <span className="sm:text-xl font-bold text-primary-600">
            Our showcase
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold">
            Check out what we&apos;ve done!
          </h1>
          <p className="max-w-2xl mx-auto mt-8 sm:text-xl text-gray-300">
            Welcome to our showcase page! See all the cool things we&apos;ve
            made at Zontaz. Check them out and get inspired!
          </p>
        </div>

        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((project) => (
            <ShowcaseProject key={project.id} {...project} />
          ))}
        </ul>
      </div>

      <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
      <div
        className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                    to-transparent to-70%`}
      />
    </section>
  );
};
