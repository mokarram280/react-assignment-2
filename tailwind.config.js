/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F26922',
        'secondary': '#71717A',
        'accent': '#FB923C',
        'foreground': '#A1A1AA'
      },
      fontFamily: {
        'onest': ['"Onest", serif']
      },
    },
  },
  plugins: [],
}

