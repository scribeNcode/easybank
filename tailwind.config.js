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
        '2xs': '320px',
        'xs' : '345px',
        's'  : '375px',
        'm'  : '425px',
        'tablet': '768px',

      },
      margin:{
        'custom':"35rem",
      },

    },
  },
  plugins: [],
}

