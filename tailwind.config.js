/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        move: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
        shakeWithDelay: {
          '0%, 20%, 100%': { transform: 'translateX(0) rotate(-45deg)' },
          '20%': { transform: 'translateX(20px) rotate(-45deg)' },
        },
        cloudMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        move: 'move 3s linear infinite',
        shakeWithDelay: 'shakeWithDelay 2s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        cloudMove: 'cloudMove 30s linear infinite',
      },
    },
  },
  plugins: [],
}
