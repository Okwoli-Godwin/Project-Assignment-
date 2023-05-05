/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'herotext': '#00214f',
      'black': '#000',
      'heroparagraph': '#232333',
      'herobutton': '#3CD19C',
      'green': '#03993f'
    },
    extend: {},
  },
  plugins: [],
}
