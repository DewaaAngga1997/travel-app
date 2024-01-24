/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //menambahkan class warna tailwind
      colors: {
        color1: "#5D50C6",
        color2: "#F85E9F",
        color3: "#FF5722",
        grey: "#222831",
      },
    },
  },
  plugins: [],
};
