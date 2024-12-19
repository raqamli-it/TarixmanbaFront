/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        1: 1,
        2: 2,
      },
    },
    screens: {
      xl: { max: "1024px" },
      lg: { max: "870px" },
      md: { max: "768px" },
      sm: { max: "520px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
