/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'rotate-360': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'rotate-360': 'rotate-360 0.7s linear forwards',
      },
    },
    
  },
  plugins: [daisyui,],
}