/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'pop':['Poopins', 'sans-serif']
      },
      keyframes: {
        slideLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
        },
    },
    animation: {
        'slide-left': 'slideLeft 1s ease-in-out',
        'slide-right': 'slideRight 1s ease-in-out',
    },
   
    },
  },
  plugins: [],
}

