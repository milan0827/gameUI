/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url(./src/assets/images/bg-image.jpeg)",
        "bluish-white": "linear-gradient(270deg,#1746A2 0%,#2D6AE1 100%)",
        "whitish-gray":
          "linear-gradient(156deg,, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%)",
      },

      fontFamily: {
        "Grenze-gotisch": ["Grenze Gotisch", "serif"],
        Exo: ["Exo", "sans-serif"],
      },

      gridTemplateRows: {
        content: "4rem 1fr",
      },

      gridTemplateColumns: {
        content: "repeat(9,1fr)",
      },

      gridColumn: {
        "header-col": "1 / -1",
        "character-col": "1 / 4",
        "spec-col": "4/ -1",
      },

      dropShadow: {
        character: "10px -2px 4px rgba(0,0,0,0.6)",
      },

      colors: {
        "gray-1": "#D9D9D9",
        "gray-2": "#F2F5FD",

        "blue-1": "#1746A2",
        "blue-2": "#2D6AE1",
      },
    },
  },
  plugins: [],
};
