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
          limeGreen: "hsl(136, 65%, 51%)",
          brightCyan: "hsl(192, 70%, 51%)"
        },
        secondary:{
          100 : "#E2E2D5",
          200 : "#888883",
        }
      },
      screens:{
        'xs': '320px',
      }

    },
  },
  plugins: [],
}

