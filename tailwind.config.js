/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E9D58A',
          dark: '#B8860B',
        },
        navy: {
          DEFAULT: '#14213D',
          light: '#1E3A8A',
          dark: '#0C1629',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          dark: '#F5F3E7',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};