/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunflower': "url('../assets/img/sunflower.png')",
       
      },
      colors:{
        'primary':"linear-gradient(315deg, #e96196 0%, #ffffff 74%);",
      }
    },
  },
  plugins: [],
}