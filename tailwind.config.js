/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        switzer: "Switzer",
      },
      backgroundImage: {
        headerBg: "url('/public/images/headerBg.webp')",
        aboutBg: "url('/public/images/about/aboutBg.webp')",
        emergencyCall: "url('/public/images/services.webp')",
      },
    },
  },
  plugins: [],
};
