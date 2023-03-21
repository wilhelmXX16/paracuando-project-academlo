/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'app-blue': '#1b4db1',
        'app-yellow': '#f3f243',
        'app-pink': '#ff64bc',
        'app-black': '#000000',
        'app-blackLight': '#1a1e2e',
        'app-grayDark' : '#6e6a6c',
        'app-gray' : '#a7a6a7',
        'app-grayLighter' : '#f8f7fa',
        'app-red': '#EF3F47',
        'app-grayLight' : '#D9D9D9',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'app-card': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};