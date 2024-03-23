/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          lg: "4rem",
          md: "3rem",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#5267DF",
        secondary: "#FA5959",
        "custom-dark": "#242A45",
        "custom-grey": "#979797",
      },
    },
  },
  plugins: [],
};
