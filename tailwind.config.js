/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#FFFFFF", // Text colour
        bg: "#000000", // Background colour
        primary: "#A6CACC", // Main colour
        secondary: "#00ffff", // Other main colour
        accent: "#8D70AE", // Accent colour
        bgContrast: "#040707", // Darker contrast background
      },
    },
  },
  plugins: [],
};
