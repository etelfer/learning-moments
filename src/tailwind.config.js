/** @type {import('tailwindcss').Config} */
export default {
  // This 'content' array is the most important part.
  // It tells Tailwind to scan all of your HTML and React
  // component files for any class names you use.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // You can add your own custom fonts, colors, etc. here.
    extend: {},
  },
  // You can add Tailwind plugins here.
  plugins: [],
}