import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { Project } from "@/lib/types";

const ProjectPage = (({ project }) => {
  return (
    <>
      <Head>
        <title>{`${project.title} - Zontaz`}</title>
        <meta name="description" content="Zontaz project page in build." />
      </Head>

      <main className="relative flex flex-col items-center justify-center h-[800px] text-center">
        <span className="sm:text-xl font-bold text-primary-600">
          {project.title}
        </span>
        <h1 className="mt-4 text-5xl sm:text-6xl md:text-8xl font-bold">
          Page in build
        </h1>
        <Link href="/" className="link-blue mt-8">
          Go back to home
        </Link>

        <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
        <div
          className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                        to-transparent to-70%`}
        />
      </main>
    </>
  );
}) satisfies NextPage<InferGetStaticPropsType<typeof getStaticProps>>;

export const getStaticPaths = (() => {
  return {
    paths: PROJECTS.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = ((ctx) => {
  const slug = ctx.params!.slug as string;

  const project = PROJECTS.find((p) => p.slug === slug)!;

  return { props: { project } };
}) satisfies GetStaticProps<{ project: Project }>;

export default ProjectPage;
