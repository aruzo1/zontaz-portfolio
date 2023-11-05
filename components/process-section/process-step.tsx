import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProcessStep = ({ icon, title, description }: Props) => {
  return (
    <li className="flex flex-col p-6 gap-4 rounded bg-neutral-100">
      <span className="self-start p-3 rounded-full bg-black text-white">
        {icon}
      </span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </li>
  );
};
