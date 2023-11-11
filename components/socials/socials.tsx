import Link from "next/link";
import { FiverrIcon, GithubIcon, InstagramIcon } from "@/components";

export const SOCIALS = [
  {
    href: "https://www.instagram.com/zontaz1/",
    icon: <InstagramIcon aria-label="Instagram" className="w-6 h-6" />,
  },
  {
    href: "https://github.com/zontaz-dev",
    icon: <GithubIcon aria-label="Github" className="w-6 h-6" />,
  },
  {
    href: "https://www.fiverr.com/aruzoyt",
    icon: <FiverrIcon aria-label="Fiverr" className="w-6 h-6" />,
  },
];

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul className={`flex gap-4 text-white ${className}`}>
      {SOCIALS.map(({ href, icon }, i) => (
        <li key={i}>
          <Link href={href} className="btn btn-gray p-3 rounded-full">
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
