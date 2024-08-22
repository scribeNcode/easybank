/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          'darkBlue' : "hsl(233, 26%, 24%)",
          'limeGreen': "hsl(136, 65%, 51%)",
          'brightCyan': "hsl(192, 70%, 51%)"
        },
        secondary:{
          'grayishBlue' : "hsl(233, 8%, 62%)",
          'LgrayishBlue' : "hsl(220, 16%, 96%)",
          'VLgrayishBlue' : "hsl(0, 0%, 98%)",
          'white' : "hsl(0, 0%, 100%)"
        }
      },
      fontFamily:{
        'public-sans':['Public Sans', 'sans-serif'],
      },
      screens:{
        'xs': '320px',
      }

    },
  },
  plugins: [],
}

