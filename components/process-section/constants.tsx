import {
  BanknotesIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";

export const PROCESS_STEPS = [
  {
    icon: <BanknotesIcon className="w-6 h-6" />,
    title: "Estimation",
    description:
      "You'll receive a detailed preliminary estimate within the next 30 minutes, so you can plan with confidence.",
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6" />,
    title: "Graphic design",
    description:
      "We start from a blank page. We familiarize ourselves with your offer and then enhance it with great graphics and texts.",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    title: "Programming",
    description:
      "We focus on loading speed. Drawing from our experience, we propose simple solutions. We simplify, not complicate.",
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: "Testing and launch",
    description:
      "Before publishing the website, we check it on various devices and browsers. You will receive a test link from us for verification.",
  },
];
