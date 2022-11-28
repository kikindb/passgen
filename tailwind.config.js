/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg01: "url('/img/bg01.png')",
        bg02: "url('/img/bg02.png')",
        bg03: "url('/img/bg03.jpg')",
        bg04: "url('/img/bg04.jpg')",
      },
      fontFamily: {
        amiga: ['Amiga Forever', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
