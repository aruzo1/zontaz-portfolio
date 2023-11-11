import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Navbar } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
