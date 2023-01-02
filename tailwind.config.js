/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {colors: {
      'dark-cyan': 'hsl(158, 36%, 37%)',
      'cream':'hsl(30, 38%, 92%)',
      'very-dark-blue':'hsl(212, 21%, 14%)',
      'dark-grayish-blue':'hsl(228, 12%, 48%)',
      'attribution-link':'hsl(228, 45%, 44%)'

    },
    screens:{
      'xs':{'max':'440px'},
      'xsm':{'min':'441px','max':'824px'},
    }},
  },
  plugins: [],
}
