/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js,ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#2C3333",
        "weather-secondary": "#2C3639",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
