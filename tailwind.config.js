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
        orange: '#D28463',
        sand: '#F1EDE7',
        darkSand: '#EDE4D7',
        lightGray: '#BBBBBB',
        gray: '#5A5A5A',
        ice: '#90D3DC',
        blueGreen: '#5CA7B2',
        darkBlueGreen: '#236973',
        'blueGreen-2': '#31606B',
        'blueGreen-3': '#266A73',
        brown: '#7D5B51',
        darkBrown: '#56382F',
        brownSaturated: '#774C35',
        'brown-2': '#42332F',
        blue: '#1A4869',
        darkBlue: '#1A384F',
        'blue-2': '#122C40',
        'blue-3': '#1A4869',
        mustard: '#CEBC7B'
      }
    },
  },
  plugins: [],
}