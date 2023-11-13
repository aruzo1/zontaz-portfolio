import Link from "next/link";
import { FiverrIcon, GithubIcon, InstagramIcon } from "@/components/atoms";

export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/zontaz1/",
    Icon: InstagramIcon,
  },
  {
    label: "Github",
    href: "https://github.com/zontaz-dev",
    Icon: GithubIcon,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/aruzoyt",
    Icon: FiverrIcon,
  },
];

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul className={`flex gap-4 text-white ${className}`}>
      {SOCIALS.map(({ label, href, Icon }, i) => (
        <li key={i}>
          <Link
            href={href}
            className="btn-gray p-3 rounded-full"
            target="_blank"
          >
            <Icon aria-label={label} className="w-6 h-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
