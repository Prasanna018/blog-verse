/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#6366F1',
        cream: {
          100: '#FFF8F0',
          200: '#FFE8D1',
          300: '#FFD8B4',
          400: '#FFB777',
          500: '#FF9838',
          600: '#FF7B00',
        },

      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 4s',
        'fade-up': 'fadeUp 0.5s ease-out',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, 10px) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, 15px) rotate(-5deg)' },
          '75%': { transform: 'translate(-15px, -5px) rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },


    },

  },
  plugins: [],
}