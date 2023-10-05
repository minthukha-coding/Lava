/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('https://i.pinimg.com/736x/0f/67/8d/0f678d9a30a06408900aa27ea3144c9a.jpg')",
      }
    },
  },
  plugins: [],
}
