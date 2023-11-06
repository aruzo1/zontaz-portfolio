import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
