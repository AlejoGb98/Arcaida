/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        poppins: ['Poppins','sans-serif']
      },
      colors: {
        'pink': '#ffdde2',
        'rose': '#FF8CC6'
      },
      backgroundImage: {
        'ticket' : 'url ("/src/assets/ticket.png")'
      }
    },
  },
  plugins: [],
}