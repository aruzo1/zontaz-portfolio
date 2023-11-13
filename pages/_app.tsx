import { AppProps } from "next/app";
import { Footer, Navbar } from "@/components/organisms";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
