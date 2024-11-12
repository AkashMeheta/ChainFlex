/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,jsx,js}',
    './components/**/*.{html,jsx,js}',
    './src/**/*.{html,jsx,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg1.svg')",
      }
    },
  },
  plugins: [],
  
}