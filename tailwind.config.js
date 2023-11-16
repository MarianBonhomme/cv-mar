/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '654px',
        lg: '1062px',
      },
      colors: {
        primary: 'var(--color-primary)',
      },
      fontFamily: {
        quicksand: ['quicksand', 'sans'],
      },
      maxWidth: {
        '8xl': '150rem', 
      },
      animation: {
        spin: 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
  purge: ["./src/**/*.{html,js}", "./public/**/*.html"],
}

