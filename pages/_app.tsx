import type { AppProps } from "next/app";
import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="pt-20 font-sans bg-neutral-950">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
