const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "manrope":["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        "grey-1":"#E9E9E9",
        "grey-2":"#A0A0A0",
        "grey-3":"#737373",
        "grey-4":"#494949",
        "grey-5":"#212121",
        "grey-6":"#1C1C1C",
       
      },
    },
  },
  plugins: [],
}

