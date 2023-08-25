/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {                 
      backgroundImage: {
        'sunflower': "url('/public/img/sunflower.png')",
        'peanuts': "url('/public/img/Products-nuts.png')"
       
      },
      colors:{
        'primary':"linear-gradient(315deg, #e96196 0%, #ffffff 74%);",
      },
      fontFamily: {
       'heading':' brush script mt, cursive'
      },
    },
  },
  plugins: [],
}