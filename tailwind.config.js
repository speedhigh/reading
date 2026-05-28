/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#18181B',
        cta: '#2563EB',
        surface: '#FAFAFA',
      },
      fontFamily: {
        heading: ['Archivo', 'Noto Sans SC', ...defaultTheme.fontFamily.sans],
        sans: ['Space Grotesk', 'Noto Sans SC', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(24, 24, 27, 0.06), 0 1px 3px rgba(24, 24, 27, 0.04)',
        'soft-lg': '0 8px 40px rgba(24, 24, 27, 0.08), 0 2px 8px rgba(24, 24, 27, 0.04)',
        glass: '0 4px 30px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        bento: '1.25rem',
      },
    },
  },
  plugins: [],
}
