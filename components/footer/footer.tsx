import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "./constants";

type SocialIconProps = {
  href: string;
  icon: ReactNode;
};

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <li>
      <Link
        href={href}
        className="btn btn-white w-12 h-12 p-0 rounded-full text-primary-600"
        target="_blank"
      >
        {icon}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="-mt-6 py-8 rounded-t bg-primary-600">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <Image src="/logo.png" alt="zontaz's logo" width={100} height={25} />

        <ul className="flex gap-6 md:gap-8">
          {SOCIALS.map((props, i) => (
            <SocialIcon key={i} {...props} />
          ))}
        </ul>

        <span className="text-white text-center">All rights reservered to Zontaz 2023</span>
      </div>
    </footer>
  );
};
