/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#339933',
      'gray': '#222222',
      'light-gray': '#333333',
      'lighter-gray': '#444444',
      'lightest-gray': '#555555',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#ff0000'
    }, fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '160': '40rem'
      }
    }
  },
  plugins: [],
}

