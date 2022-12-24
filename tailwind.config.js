/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      md: ["16px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      bs: ["20px", { lineHeight: "26px", letterSpacing: "-0.03em" }],
      lg: ["24px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["28px", { lineHeight: "30px", letterSpacing: "-0.03em" }],
      "2xl": ["32px", { lineHeight: "32px", letterSpacing: "-0.032em" }],
      "3xl": ["40px", { lineHeight: "40px", letterSpacing: "-0.032em" }],
      "4xl": ["48px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "5xl": ["56px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "6xl": ["64px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "7xl": ["72px", { lineHeight: "72px", letterSpacing: "-0.034em" }],
      "8xl": ["96px", { lineHeight: "96px", letterSpacing: "-0.034em" }],
      // 96,72,64,56,48,40,32,28,24,20,16,14,12
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      screens: {
        largeDesktop: "1600px",
        desktop: "1248px",
        largeTablet: "1012px",
        tablet: "768px",
        largeMobile: "544px",
        mobile: "320px",
      },
      colors: {
        primary: "#CCECFF",
        secondary: "#FCFEA1",
        tertiary: "#4EBFFF",
      },
      boxShadow: {
        "inverse-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
