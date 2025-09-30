/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-green': '#4A5D23',
        'warm-beige': '#F5F1E8',
        'light-brown': '#D4C4A8',
        'coffee-brown': '#8B4513',
      },
      fontFamily: {
        'vintage': ['Playfair Display', 'serif'],
        'vintage-alt': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'vintage': '0 4px 15px rgba(74, 93, 35, 0.1)',
        'vintage-lg': '0 10px 30px rgba(74, 93, 35, 0.15)',
      },
    },
  },
  plugins: [],
}
