/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      kalam: ["Kalam", "cursive"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1280px",
      },
    },
    borderRadius: {
      DEFAULT: "1.5rem",
      full: "999px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
    },
  },
  plugins: [],
};
