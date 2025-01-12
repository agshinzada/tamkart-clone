/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cdark: "#131311",
        cprimary: "#76FA57",
        caltertativ: "#32E409",
        csecondary: "#232324",
        cthird: "#3F3E40",
        cfour: "#2D2D2E",
      },
      screens: {
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
