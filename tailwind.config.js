// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or your preferred sans-serif font
        serif: ['Playfair Display', 'serif'], // Or your preferred serif font for elegance
      }
    },
  },
  plugins: [],
}