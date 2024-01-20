/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Gilroy-font': ('Gilroy-black'),
        'Konexy-font' : ('Konexy-font'),
        'jost': ('Jost', 'sans-serif'),
        'inter': ('Inter' , 'sans-serif')
      },
      boxShadow:{
        'gradient-shadow' : '0px 20px 50px 0px rgba(39, 0, 124, 0.50)' ,
        'card-shadow' : ' 0px 20px 60.571px 0px #E5E9F6',
        'min-card': '12.114px 48.457px 60.571px 0px rgba(229, 233, 246, 0.40)'
      }
    },
  },
  plugins: [],
}
