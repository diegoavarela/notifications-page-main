/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      colors: {
        'red': 'hsl(1, 90%, 64%)',
        'blue': 'hsl(219, 85%, 26%)',
        'white': 'hsl(0, 0%, 100%)',
        'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)',
      }
    },
  },
  plugins: [],
}

