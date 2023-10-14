/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero2':"url('./src/assets/images/illustration-editor-desktop.svg')",
      },
    },
  },
  plugins: [],
}
