import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarDialog } from "./navbar-dialog";
import { NAVIGATION } from "./constants";

export const Navbar = () => {
  const lastNavigationItem = useMemo(
    () => NAVIGATION[NAVIGATION.length - 1],
    []
  );

  return (
    <div className="absolute z-30 top-8 left-0 right-0 pointer-events-auto">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            alt="logo"
            src="/logo.png"
            height={25}
            width={100}
            quality={100}
          />
        </Link>

        <ul className="hidden md:flex gap-16 font-bold text-white">
          {NAVIGATION.slice(0, -1).map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="link">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={lastNavigationItem.href} className="hidden md:block btn">
          {lastNavigationItem.label}
        </Link>

        <NavbarDialog />
      </nav>
    </div>
  );
};
