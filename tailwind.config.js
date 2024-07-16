/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#EDF4F5", // Text colour
        bg: "#070C0C", // Background colour
        primary: "#A6CACC", // Main colour
        secondary: "#00ffff", // Other main colour
        accent: "#8D70AE", // Accent colour
        bgContrast: "#040707", // Darker contrast background
      },
    },
  },
  plugins: [],
};
