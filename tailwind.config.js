
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {        

    extend: {
      colors: {
        customGreen: '#14213d', 
        newGreen: '#1E6C4E',
        customBlack: '#fefae0',
        customBlue:  '#e5e5e5',
        customWhite: '#fefae0',
        customOrange: '#fca311',
        customCream: '#f3e9d2',
      },
       animation: {
        gradient: 'gradientAnimation 10s ease infinite',
      },
      keyframes: {
        moveAway: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, -30px)' },
        },
      },
      animation: {
        moveAway: 'moveAway 0.5s ease-in-out forwards',
      },
      // keyframes: {
      //   gradientAnimation: {
      //     '0%': { backgroundPosition: '0% 50%' },
      //     '50%': { backgroundPosition: '100% 50%' },
      //     '100%': { backgroundPosition: '0% 50%' },
      //   },
      // },
    },
  },
  plugins: [],
}

