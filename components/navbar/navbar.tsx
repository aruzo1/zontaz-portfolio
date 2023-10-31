import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/20/solid";

export const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between mt-8">
      <Link href="/">
        <Image alt="logo" src="/logo.png" height="25" width="100" />
      </Link>

      <ul className="hidden md:flex gap-16 font-bold">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/work" className="link">
            Work
          </Link>
        </li>
      </ul>

      <Link href="/quotation" className="hidden md:block btn">
        Quotation
      </Link>

      <button className="md:hidden btn p-3">
        <Bars3Icon className="w-5 h-5" />
      </button>
    </nav>
  );
};
