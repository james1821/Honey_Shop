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
       
      }
    },
  },
  plugins: [],
}