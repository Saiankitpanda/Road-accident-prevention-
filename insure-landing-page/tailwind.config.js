/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        violet: "#2d2640",
        grayblue: "#95a9c6;",
        midnight: "#2b272f",
        tahiti: "#837d87",
        light: "#fafafa",
        gray1: "#DADADA",
        hover: "#2C2830",
      },
    },
  },
  plugins: [],
};
