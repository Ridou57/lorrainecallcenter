/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005FA8',   // ton bleu sombre
        accent: '#FFD200',    // ton jaune clair
        secondary: '#F7F9FC', // pour sections claires
      },
      fontFamily: {
        sans: ['Geist Sans','ui-sans-serif','system-ui'],
        mono: ['Geist Mono','ui-monospace','monospace'],
      },
    },
  },
  plugins: [typography],
};
