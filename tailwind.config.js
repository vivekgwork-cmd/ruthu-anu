/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cherry: {
          950: '#380407',
          900: '#520609',
          800: '#6E0A0D',
          700: '#7A0C13',
          600: '#8E131B',
          500: '#A81C26',
          100: '#F9ECEE',
          50: '#FDF7F8',
        },
        blush: {
          500: '#E29DA6',
          300: '#ECC4C8',
          200: '#F4D9DC',
          100: '#FAEBEC',
        },
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        flourish: ['"Alex Brush"', 'cursive'],
        italiana: ['"Italiana"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
