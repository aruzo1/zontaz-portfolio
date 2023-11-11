import { ComponentProps } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = { title: string; slug: string } & ComponentProps<typeof Image>;

export const ProjectImage = ({ title, slug, ...rest }: Props) => {
  return (
    <Link
      href={`/showcase/${slug}`}
      className="group relative block shine-sm rounded overflow-hidden"
    >
      <div className="z-10 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-primary-600 bg-opacity-40 transition-opacity">
        <div className="flex items-center translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="text-2xl font-bold">{title}</h3>
          <ArrowUpRightIcon className="w-10 h-10 ml-1" />
        </div>
      </div>

      <Image className="-z-10 relative" {...rest} />
    </Link>
  );
};
