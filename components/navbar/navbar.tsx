import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/components";
import { Bars3Icon } from "@heroicons/react/20/solid";

const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="z-20 fixed top-0 inset-x-0 box-content h-12 py-2 bg-gray-950/90 border-b border-b-gray-800 backdrop-blur-lg">
      <nav className="container flex items-center justify-between lg:justify-start h-full">
        <Link href="/">
          <Image
            alt="logo"
            src="/logo.png"
            height={22.5}
            width={90}
            quality={100}
          />
        </Link>

        <ul className="hidden lg:flex gap-12 ml-16">
          {NAVIGATION.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="link">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-4 ml-auto">
          <Socials />

          <Link href="/quote" className="btn">
            Get a quote
            <span className="font-normal ml-1">- it&apos;s free</span>
          </Link>
        </div>

        <button className="lg:hidden">
          <Bars3Icon className="w-8 h-8 text-white" />
        </button>
      </nav>
    </div>
  );
};
