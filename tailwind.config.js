/** @type {import('tailwindcss').Config} */
var require = require("tailwindcss");
// var require = require("daisyui");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
