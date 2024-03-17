/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'organization': 'rgba(122, 196, 224, 0.25)',
        'sponsorship': 'rgba(205, 205, 251, 0.3)',
      },
    },
  },
  plugins: [],
}

