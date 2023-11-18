/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luxurious': ['Luxurious Roman', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        royalblue: {
          'primary': '#080f43', // Dark Blue
          'secondary': '#0f1881', // Blue
          'accent': '#00A6FB',   // Light Blue
          'neutral': '#03030f',  // almost black
          'base-100': '#ffffff',  // White
          'base-200': '#f2f4f6',  // Off-White
          'info': '#2E7D32',     // Green
          'success': '#388E3C',  // Dark Green
          'warning': '#FBC02D',  // Yellow
          'error': '#D32F2F',    // Red
        },
      },
      "light",
      "dark",
      "bumblebee",
      "luxury",
    ],
  },
}
