/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        move: 'move 2s linear infinite',
      },
    },
  },
  plugins: [],
}
