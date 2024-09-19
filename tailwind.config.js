/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "brand-primary": "#8e43e7",
        "brand-secondary": "#003666",
      },
    },
  },
  plugins: [],
};
