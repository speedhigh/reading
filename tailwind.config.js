/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1917',
        cta: '#44403C',
        accent: '#A16207',
        gold: '#C4A77D',
        surface: '#FAF8F5',
        paper: '#F5F2EB',
        ink: '#0C0A09',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'Georgia', ...defaultTheme.fontFamily.serif],
        heading: ['"Noto Serif SC"', 'Georgia', ...defaultTheme.fontFamily.serif],
        sans: ['"Noto Sans SC"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 2px 20px rgba(28, 25, 23, 0.05)',
        'soft-lg': '0 8px 40px rgba(28, 25, 23, 0.07)',
      },
    },
  },
  plugins: [],
}
