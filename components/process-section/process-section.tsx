import {
  BanknotesIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export const ProcessSection = () => {
  return (
    <section className="-mt-6 pt-16 md:pt-24 pb-24 md:pb-[7.5rem] rounded-t bg-white">
      <div className="container flex gap-16">
        <div className="flex flex-col w-2/5 gap-6">
          <div>
            <span className="text-xl font-bold text-primary-600">
              OUR PROCESS
            </span>
            <h2 className="text-7xl font-bold mt-4">
              Bringing your vision to life
            </h2>
          </div>

          <p className="text-lg text-neutral-600">
            At Zontaz, we follow a structured approach to ensure that every
            project is executed seamlessly and efficiently. Here&apos;s how we
            bring your vision to life.
          </p>
          <Link href="/quotation" className="btn self-start">
            Get Quotation
          </Link>
        </div>

        <ul className="w-3/5 grid grid-cols-2 gap-8">
          <li className="flex flex-col p-6 gap-4 rounded bg-neutral-100">
            <span className="self-start p-3 rounded-full bg-black text-white">
              <BanknotesIcon className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold">1. Estimation</h3>
            <p className="text-neutral-700">
              You&apos;ll receive a detailed preliminary estimate within the
              next 30 minutes, so you can plan with confidence.
            </p>
          </li>

          <li className="flex flex-col p-6 gap-4 rounded bg-neutral-100">
            <span className="self-start p-3 rounded-full bg-black text-white">
              <PaintBrushIcon className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold">2. Graphic design</h3>
            <p className="text-neutral-700">
              We start from a blank page. We familiarize ourselves with your
              offer and then enhance it with great graphics and texts.
            </p>
          </li>

          <li className="flex flex-col p-6 gap-4 rounded bg-neutral-100">
            <span className="self-start p-3 rounded-full bg-black text-white">
              <WrenchScrewdriverIcon className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold">3. Programming</h3>
            <p className="text-neutral-700">
              We focus on loading speed. Drawing from our experience, we propose
              simple solutions. We simplify, not complicate.
            </p>
          </li>

          <li className="flex flex-col p-6 gap-4 rounded bg-neutral-100">
            <span className="self-start p-3 rounded-full bg-black text-white">
              <RocketLaunchIcon className="w-6 h-6" />
            </span>
            <h3 className="text-2xl font-bold">4. Testing and launch</h3>
            <p className="text-neutral-700">
              Before publishing the website, we check it on various devices and
              browsers. You will receive a test link from us for verification.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
