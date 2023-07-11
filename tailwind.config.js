/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FF7F11',
        background: '#F4F7FA',
        text: '#344563',
      },
    },
  },
  plugins: [],
}