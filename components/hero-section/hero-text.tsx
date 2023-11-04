import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const HeroText = () => {
  return (
    <div className="container flex flex-col items-center gap-6 md:gap-8 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
        Creating <span className="text-primary-600">amazing</span> websites for
        your business
      </h1>

      <p className="max-w-5xl md:text-xl text-neutral-300">
        We&apos;re the go-to for crafting stunning websites that boost your
        online presence and business success. Our team combines creativity and
        technical knowledge to bring your vision to life online.
      </p>

      <Link href="/work" className="btn btn-lg">
        Explore Work <ArrowRightIcon className="w-6 h-6" />
      </Link>
    </div>
  );
};
