/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      colors: {
        sand: '#F1EDE7',
        lightGray: '#BBBBBB',
        gray: '#5A5A5A',
        blueGreen: '#5CA7B2',
        darkBlueGreen: '#236973'

      }
    },
  },
  plugins: [],
}