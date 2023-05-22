/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brunoAce: ["Bruno Ace", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        playfairDisplay: ["Playfair Display", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        myYellow: "#F1C400",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        smd: "540px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontSize: {
        small: "8px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
