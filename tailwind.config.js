const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      black: colors.black,
      white: colors.white,
      yellow: colors.amber,
      sky: colors.sky,
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  }
}
