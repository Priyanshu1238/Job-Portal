/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
    '50': '#f6f6f6',
    '100': '#e7e7e7',
    '200': '#d1d1d1',
    '300': '#b0b0b0',
    '400': '#888888',
    '500': '#6d6d6d',
    '600': '#5d5d5d',
    '700': '#4f4f4f',
    '800': '#454545',
    '900': '#3d3d3d',
    '950': '#2d2d2d',
},
'bright-sun': {
    
    '50': '#edf8ff',
    '100': '#d6efff',
    '200': '#b5e4ff',
    '300': '#83d5ff',
    '400': '#48bcff',
    '500': '#1e9aff',
    '600': '#067aff',
    '700': '#0066ff',
    '800': '#084ec5',
    '900': '#0d469b',
    '950': '#0e2b5d',

},


      }
    },
  },
  plugins: [],
}

