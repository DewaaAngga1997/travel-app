/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //menambahkan class warna tailwind
      colors: {
        color1: "#5D50C6",
        pink: "#F85E9F",
        orange: "#FF5722",
        grey: "#222831",
      },
    },
  },
  plugins: [],
};
