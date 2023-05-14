/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['Merienda', 'sans-serif'],
      },
      colors: {
        primaryColor: '#396C03',
        secondaryColor: '#FF8B00',
        blackBasic: '#3F3F3F',
        gray: '#676767',
        light: '#C4C4C4',
        light2: '#C7C7C7',
        green: '#6B9142',
      },
      animation: {
        goToRight: 'gtr 5s infinite',
      },
      keyframes: {
        gtr: {
          '0%': {},
          '100%': {
            transform: 'translateX(100%) translateY(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
};
