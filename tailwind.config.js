module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1128px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          500: '#EBEBEB',
          600: '#636260'
        },
      },
    },
  },
  plugins: [],
}