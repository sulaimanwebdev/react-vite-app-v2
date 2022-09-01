const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
    maxHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            '4/5':"80%",
            '11/12':'90%',
            'full': '100%',
            }
  },
  variants: {
    display: ['responsive', 'dropdown']
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require('tailwindcss-dropdown')],
};
