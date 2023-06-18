/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "red-hat-display":["Red Hat Display", "sans-serif"],
      },
      backgroundColor:{
        "pale-blue": "#e0e8ff",
        "bright-blue":"#3829e0",
        "very-pale-blue":"#f5f7ff",
        "desaturated-blue":"#7280a7",
        "dark-blue":"#1f2f56",
      },
      textColor: {
         "bright-blue":"#3829e0",
        "pale-blue": "#e0e8ff",
        "desaturated-blue":"#7280a7",
      },
      backgroundImage:{
        "main-img":"url('/images/illustration-hero.svg')",
        "music-img":"url('/images/icon-music.svg')",
      },
    },
  },
  plugins: [],
}