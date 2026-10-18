/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      colors: {
        midnight: {
          950: '#030508',
          900: '#05070D',
          850: '#080C16',
          800: '#0D1322',
          700: '#141D33',
        },
        gold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          dim: '#997F29',
        },
        steel: {
          blue: '#1E293B',
          light: '#334155',
        }
      }
    },
  },
  plugins: [],
}
