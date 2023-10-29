/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#DABB9E",
          20 : "#F8E4BE",
          30: "#603809",
          90: "#533529",
        },
      },
    },
  },
  plugins: [],
};
