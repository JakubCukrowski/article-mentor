/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ['"Manrope"', "cursive"]
      },
      colors: {
        "very-dark-grayish-blue": "#48556A",
        "desaturated-dark-blue": "#6D7F97",
        "grayish-blue": "#9EAFC2",
        "light-grayish-blue": "#ECF2F8"
      }
    },
  },
  plugins: [],
}