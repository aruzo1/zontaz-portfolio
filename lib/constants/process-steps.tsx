import {
  PaintBrushIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";

export const PROCESS_STEPS = [
  {
    icon: <PencilSquareIcon className="w-6 h-6" />,
    title: "Your ideas matter",
    description:
      "We want to hear all about your ideas for the website. It's your space, and we want to make sure it's just the way you picture it in your mind.",
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6" />,
    title: "Creating cool looks",
    description:
      "Our team of graphic designers makes your website look super cool. They choose colors, pictures, and layouts to make it visually stunning.",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    title: "Cracking the code",
    description:
      "Our tech wizards use special code to make your website work. They bring your design to life by making it interactive and functional.",
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: "Testing and launch",
    description:
      "Before your website goes live, we test everything to make sure it's perfect. Then, we launch it for the world to see and enjoy.",
  },
];
