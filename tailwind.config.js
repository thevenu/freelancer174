/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#24392D',
          deep: '#1A2B21',
          light: '#2E4739',
          hover: '#1B2E23'
        },
        sage: {
          DEFAULT: '#C5E5B9',
          light: '#E2F3DC',
          dark: '#9AC98B',
          muted: '#A8D497',
          border: '#B3DDA5'
        },
        beige: {
          DEFAULT: '#F6F2E9',
          card: '#FAF7F2',
          surface: '#FFFFFF',
          dark: '#ECE4D4',
          border: '#E3DCD0'
        },
        charcoal: {
          DEFAULT: '#26332A',
          light: '#4B574F',
          muted: '#6C7A70'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
