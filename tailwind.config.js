/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        'bgControls': 'hsla(0,0%,7%,.75)',
        'borderControls': 'hsla(0,0%,100%,.2)'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

