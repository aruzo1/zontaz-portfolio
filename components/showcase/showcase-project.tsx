import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const ShowcaseProject = (props: Props) => {
  const { slug, src, alt, title, description } = props;

  return (
    <li>
      <Link
        className="flex flex-col h-full p-6 rounded bg-white hover:bg-neutral-200 transition-colors"
        href={`/showcase/${slug}`}
      >
        <div className="relative aspect-video rounded overflow-hidden border border-neutral-600">
          <Image src={src} alt={alt} fill />
        </div>

        <h2 className="mt-4 text-2xl font-bold">{title}</h2>

        <p className="mt-2 text-neutral-600">{description}</p>
      </Link>
    </li>
  );
};
