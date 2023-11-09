import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const HeroText = () => {
  return (
    <div className="container flex flex-col items-center gap-6 md:gap-8 text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white">
        Creating <span className="text-primary-600">amazing</span> websites for
        your business
      </h1>

      <p className="max-w-5xl sm:text-lg text-neutral-300">
        Welcome to Zontaz, where we turn your online dreams into reality. We
        build websites that reflect your unique style. With eye-catching designs
        and user-friendly features, we&apos;re here to make your online presence
        shine.
      </p>

      <Link href="/showcase" className="btn btn-lg w-full sm:w-fit">
        Explore showcase <ArrowRightIcon className="w-6 h-6" />
      </Link>
    </div>
  );
};
