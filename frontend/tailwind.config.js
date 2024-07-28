/** @type {import('tailwindcss').Config} */
import { mobaseTW } from "@momo-webplatform/mobase";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@momo-webplatform/mobase/dist/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate"),mobaseTW()],
};
