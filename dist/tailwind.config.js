/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-cinza' : '#D9D9D9',
      },

      width:{
        'iframe-600': '600px',
        'best-sellers-400':'400px'
      },

      height:{
        'iframe-h-450':'450px',
        'best-sellers-350':'350px'
      },

      fontSize: {
        'h1-agends-p':'3.9em',
        'h1-agends-g':'4.2em',
      },

      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',

        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

