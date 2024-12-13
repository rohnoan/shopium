/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2k': '400px', // 2k => 400px
        '1k': '200px', // 1k => 200px
        '500': '100px', // 500 => 100px
      },
    },
  },
  plugins: [],
}
