import Image from "next/image";

export const HeroProjects = () => {
  return (
    <div className="hidden xl:block w-[45%]">
      <div className="z-0 relative min-w-[800px] py-20">
        <div className="shine-sm rounded overflow-hidden">
          <Image
            className="-z-10 relative"
            src="/images/project-1.png"
            alt="project 1"
            width={800}
            height={500}
            priority
          />
        </div>

        <div className="z-10 absolute bottom-0 left-16 animate-levitateUp">
          <div className="shine-sm rounded overflow-hidden">
            <Image
              className="-z-10 relative"
              src="/images/project-2.png"
              alt="project 2"
              width={300}
              height={190}
            />
          </div>
        </div>

        <div className="z-10 absolute top-0 right-16 animate-levitateDown">
          <div className="shine-sm rounded overflow-hidden">
            <Image
              className="-z-10 relative"
              src="/images/project-3.png"
              alt="project 3"
              width={300}
              height={190}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
