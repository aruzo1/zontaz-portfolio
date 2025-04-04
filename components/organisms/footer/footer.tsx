import { Socials } from "@/components/molecules";

export const Footer = () => {
  return (
    <footer className="py-4 bg-gray-950 border-t border-gray-800">
      <div className="container flex flex-col sm:flex-row-reverse justify-between items-center gap-4">
        <Socials />
        <span>© 2025 Aruzo all rights reserved.</span>
      </div>
    </footer>
  );
};
