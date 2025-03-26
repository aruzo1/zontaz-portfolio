import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/components/molecules";
import { NavbarDialog } from "./navbar-dialog";
import { Logo } from "@/components/atoms";

export const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="z-20 fixed top-0 inset-x-0 box-content h-12 py-2 pointer-events-auto bg-gray-950 lg:bg-gray-950/90 border-b border-b-gray-800 backdrop-blur-lg">
      <nav className="container flex items-center h-full">
        <Link href="/">
          <Logo height={30} width={72} />
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

          <Link href="/contact" className="btn-primary">
            Get a quote
            <span className="font-normal">- it&apos;s free</span>
          </Link>
        </div>

        <NavbarDialog />
      </nav>
    </div>
  );
};
