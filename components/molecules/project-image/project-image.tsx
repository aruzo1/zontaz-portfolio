import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

type Props = { title: string; slug: string } & React.ComponentPropsWithoutRef<
  typeof Image
>;

export const ProjectImage = React.forwardRef<HTMLImageElement, Props>(
  ({ title, slug, ...rest }, ref) => {
    return (
      <Link
        href={`/showcase/${slug}`}
        className="group relative block shine-sm rounded overflow-hidden"
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-primary-600 bg-opacity-40 transition-opacity`}
        >
          <div
            className={`flex justify-center items-center h-full translate-y-2 
                        group-hover:translate-y-0 transition-transform`}
          >
            <h3 className="text-2xl font-bold">{title}</h3>
            <ArrowUpRightIcon className="w-10 h-10 ml-1" />
          </div>
        </div>

        <Image ref={ref} className="-z-10 relative" {...rest} />
      </Link>
    );
  }
);

ProjectImage.displayName = "ProjectImage";
