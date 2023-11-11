import { ProjectImage } from "@/components";
import { PROJECTS } from "@/lib/constants";

export const HeroProjects = () => {
  return (
    <div className="hidden xl:block w-[45%]">
      <div className="z-0 relative min-w-[800px] py-20">
        <ProjectImage
          title={PROJECTS[0].title}
          slug={PROJECTS[0].slug}
          src={PROJECTS[0].src}
          alt={PROJECTS[0].alt}
          width={800}
          height={500}
          priority
        />

        <div className="z-10 absolute bottom-0 left-16 animate-levitateUp">
          <ProjectImage
            title={PROJECTS[1].title}
            slug={PROJECTS[1].slug}
            src={PROJECTS[1].src}
            alt={PROJECTS[1].alt}
            width={300}
            height={190}
          />
        </div>

        <div className="z-10 absolute top-0 right-16 animate-levitateDown">
          <ProjectImage
            title={PROJECTS[2].title}
            slug={PROJECTS[2].slug}
            src={PROJECTS[2].src}
            alt={PROJECTS[2].alt}
            width={300}
            height={190}
          />
        </div>
      </div>
    </div>
  );
};
