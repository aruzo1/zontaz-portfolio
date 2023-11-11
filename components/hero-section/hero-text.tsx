import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export const HeroText = () => {
  return (
    <div className="flex flex-col items-center xl:items-start gap-9 w-full xl:w-[55%] text-center xl:text-start">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
        We are creating{" "}
        <span className="text-primary-600 drop-shadow-xl text-shine">
          amazing
        </span>{" "}
        websites
      </h1>

      <p className="max-w-5xl sm:text-xl text-neutral-300">
        We make awesome websites that make your business stand out online. Our
        team uses creativity and tech skills to bring your ideas to life on the
        internet.
      </p>

      <nav className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
        <Link href="/showcase" className="btn w-full sm:w-auto">
          Explore work
        </Link>

        <Link href="/contact" className="link group flex">
          <span>Contact us</span>
          <ArrowLongRightIcon
            className={`w-6 h-6 ml-2 group-hover:translate-x-1 
                        transition-transform`}
          />
        </Link>
      </nav>
    </div>
  );
};
