/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CCECFF",
        secondary: "#FCFEA1",
        blueish: "#4EBFFF",
      },
    },
  },
  plugins: [],
};
