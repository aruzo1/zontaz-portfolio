import { AppProps } from "next/app";
import { Navbar } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
