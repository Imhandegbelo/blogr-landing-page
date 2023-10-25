/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-desktop":
          "url('../src/assets/images/bg-pattern-intro-desktop.svg'), linear-gradient(to right, hsl(13, 100%, 72%) , hsl(353, 100%, 62%))",
        "pattern-mobile":
          "url('../src/assets/images/bg-pattern-intro-mobile.svg'), linear-gradient(to bottom, hsl(13, 100%, 72%) , hsl(353, 100%, 62%))",
          "pattern-circles":
          'url("../src/assets/images/bg-pattern-circles.svg"), linear-gradient(to right, hsl(237, 17%, 21%) , hsl(237, 23%, 32%))',
      },
    },
  },
  plugins: [],
};
