/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404EED",
        secondary: "#5865F2",
        "dark-primary": "#23272A",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
