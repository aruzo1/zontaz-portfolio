import Link from "next/link";
import { ProcessStep } from "./process-step";
import { PROCESS_STEPS } from "./constants";

export const ProcessSection = () => {
  return (
    <section className="-mt-6 pt-16 md:pt-24 pb-24 md:pb-[7.5rem] rounded-t bg-white">
      <div className="container flex flex-col lg:flex-row gap-12 md:gap-16">
        <div className="lg:w-2/5 flex flex-col gap-4 md:gap-6">
          <div>
            <span className="text-lg sm:text-xl font-bold text-primary-600">
              THE PROCESS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 md:mt-4">
              Bringing your vision to life
            </h2>
          </div>

          <p className="sm:text-lg text-neutral-600">
            At Zontaz, we&apos;re here to build the website of your dreams. We
            follow these steps to make sure your website is more than great!
          </p>
          <Link href="/quotation" className="btn self-start">
            Get a quote
          </Link>
        </div>

        <ul className="lg:w-3/5 grid md:grid-cols-2 gap-6 md:gap-8">
          {PROCESS_STEPS.map(({ icon, title, description }, i) => (
            <ProcessStep
              key={title}
              icon={icon}
              title={`${i + 1}. ${title}`}
              description={description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
