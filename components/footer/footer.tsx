import { Socials } from "@/components";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-gray-800">
      <div className="container flex flex-col sm:flex-row-reverse justify-between items-center gap-4">
        <Socials />
        <span>© 2023 Zontaz all rights reserved.</span>
      </div>
    </footer>
  );
};
