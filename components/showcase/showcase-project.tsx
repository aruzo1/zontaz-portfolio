import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Project } from "@/lib/types";

export const ShowcaseProject = (props: Project) => {
  const { slug, src, alt, title, description } = props;

  return (
    <li>
      <Link
        href={`/showcase/${slug}`}
        className="group z-0 relative block h-full p-6 rounded bg-gray-950 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.065),transparent)] border border-gray-800"
      >
        <div className="shine-sm group-hover:shine-md rounded overflow-hidden transition-all">
          <Image
            className="-z-10 relative w-full"
            src={src}
            alt={alt}
            width={300}
            height={170}
          />
        </div>

        <div className="flex items-center mt-4 group-hover:text-gray-200 transition-colors">
          <h2 className="text-2xl font-bold">{title}</h2>
          <ArrowUpRightIcon className="w-7 h-7 ml-1 group-hover:translate-x-px group-hover:-translate-y-px transition-transform" />
        </div>

        <p className="mt-2 text-gray-300">{description}</p>
      </Link>
    </li>
  );
};
