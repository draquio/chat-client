/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadescale:{
          '0%': {
            opacity: '0',
            transform: 'scale(0.6)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation:{
        fadescale: 'fadescale 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

