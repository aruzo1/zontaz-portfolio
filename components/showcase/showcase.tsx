import { PROJECTS } from "./constants";
import { ShowcaseProject } from "./showcase-project";

export const Showcase = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center">
        <div>
          <span className="text-lg sm:text-xl font-bold text-primary-600">
            Showcase
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            Check out what we&apos;ve done!
          </h1>
        </div>

        <p className="max-w-xl mt-6 mx-auto sm:text-lg text-neutral-300">
          Welcome to our showcase page! See all the cool things we&apos;ve made
          at Zontaz. Check them out and get inspired!
        </p>
      </div>

      <main>
        <ul className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((props) => (
            <ShowcaseProject key={props.title} {...props} />
          ))}
        </ul>
      </main>
    </section>
  );
};
