/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['quicksand', 'sans'],
      },
      colors: {
        primary: '#45DB9C',
      },
      maxWidth: {
        '8xl': '150rem', 
      },
      screens: {
        sm: '654px',
        lg: '1062px',
      }
    },
  },
  plugins: [],
  purge: ["./src/**/*.{html,js}", "./public/**/*.html"],
}

