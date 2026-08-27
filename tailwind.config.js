/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        marrom: "#4A2C20",
        "marrom-claro": "#704735",
        bege: "#F5EBDD",
        creme: "#FFF9F0",
        dourado: "#F4C928",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
};