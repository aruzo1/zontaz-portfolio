import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "1.5rem",
      full: "999px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        DEFAULT: "1280px",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        neutral: {
          100: "#f0f0f0",
        },
        primary: {
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      keyframes: {
        accordionSlideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionSlideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        accordionSlideDown: "accordionSlideDown 150ms ease-out",
        accordionSlideUp: "accordionSlideUp 150ms ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
