/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
  ],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      width: {
        '22': '5.5rem'
      },
    },
  },
  plugins: [],

}

