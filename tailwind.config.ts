import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "0.75rem",
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
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
        primary: {
          500: "#4C6AFF",
          600: "#2F41FF",
          700: "#202DE2",
        },
      },
      keyframes: {
        levitateDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(.5rem)" },
        },
        levitateUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-.5rem)" },
        },
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
        levitateDown: "levitateDown 3s infinite ease-in-out",
        levitateUp: "levitateUp 3s infinite ease-in-out",
        accordionSlideDown: "accordionSlideDown 150ms ease-out",
        accordionSlideUp: "accordionSlideUp 150ms ease-in",
      },
      backgroundImage: {
        "topography-pattern": "url('/patterns/topography.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
