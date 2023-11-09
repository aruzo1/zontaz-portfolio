import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Project } from "@/lib/types";

export const ShowcaseProject = (props: Project) => {
  const { slug, src, alt, title, description } = props;

  return (
    <li
      className={`group rounded bg-white transition-shadow
                  hover:shadow-[.5rem_.5rem_0_theme('colors.primary.600')]`}
    >
      <Link className="block p-6" href={`/showcase/${slug}`}>
        <div
          className={`relative aspect-video rounded overflow-hidden border 
                      border-neutral-600`}
        >
          <Image src={src} alt={alt} fill />
        </div>

        <div
          className={`flex items-center mt-4 group-hover:text-primary-600 
                      transition-colors`}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <ArrowUpRightIcon
            className={`w-5 h-5 ml-1 group-hover:translate-x-0.5 
                        group-hover:-translate-y-0.5 transition-transform`}
          />
        </div>

        <p className="mt-2 text-neutral-600">{description}</p>
      </Link>
    </li>
  );
};
