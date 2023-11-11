import {
  AcademicCapIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const STEPS = [
  {
    title: "1. Your ideas do matter",
    description:
      "We want to hear all about your ideas for the website. It's your space, and we want to make sure it's just the way you picture it in your mind.",
    icon: <AcademicCapIcon className="w-12 sm:w-16 h-12 sm:h-16 text-[#FF2F2F]" />,
  },
  {
    title: "2. Creating cool looks",
    description:
      "Our team of graphic designers makes your website look super cool. They choose colors, pictures, and layouts to make it visually stunning.",
    icon: <PaintBrushIcon className="w-12 sm:w-16 h-12 sm:h-16 text-[#2FFFC1]" />,
  },
  {
    title: "3. Cracking the code",
    description:
      "Our tech wizards use special code to make your website work. They bring your design to life by making it interactive and functional.",
    icon: <WrenchScrewdriverIcon className="w-12 sm:w-16 h-12 sm:h-16 text-[#FF932F]" />,
  },
  {
    title: "4. Testing and launch",
    description:
      "Before your website goes live, we test everything to make sure it's perfect. Then, we launch it for the world to see and enjoy.",
    icon: <RocketLaunchIcon className="w-12 sm:w-16 h-12 sm:h-16 text-[#E22FFF]" />,
  },
];

type ProcessStepProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const ProcessStep = ({ title, description, icon }: ProcessStepProps) => {
  return (
    <li className="p-6 rounded bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent)] border border-gray-800">
      {icon}
      <h2 className="mt-6 text-2xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-300">{description}</p>
    </li>
  );
};

export const ProcessSection = () => {
  return (
    <section className="container mt-24 pb-24">
      <div className="flex flex-col items-center text-center">
        <span className="sm:text-xl font-bold text-primary-600">
          The process
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold">
          Bringing your vision to life
        </h2>
        <p className="max-w-2xl mt-8 sm:text-xl text-gray-300">
          At Zontaz, we&apos;re here to build the website of your dreams. We
          follow these steps to make sure your website is more than great!
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {STEPS.map((props, i) => (
          <ProcessStep key={i} {...props} />
        ))}
      </ul>
    </section>
  );
};
