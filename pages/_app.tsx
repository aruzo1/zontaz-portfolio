import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${font.className} pt-20 bg-neutral-950`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
