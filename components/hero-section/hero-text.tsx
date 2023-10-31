import Link from "next/link";

export const HeroText = () => {
  return (
    <div className="container flex flex-col items-center mt-16 md:mt-24 gap-8 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
        Creating{" "}
        <span className="text-primary-600">amazing</span>{" "}
        websites for your business
      </h1>

      <p className="max-w-5xl text-lg md:text-xl text-neutral-300">
        We&apos;re the go-to for crafting stunning websites that boost your
        online presence and business success. Our team combines creativity and
        technical knowledge to bring your vision to life online.
      </p>

      <Link href="/work" className="btn btn-lg">
        Explore Work
      </Link>
    </div>
  );
};
