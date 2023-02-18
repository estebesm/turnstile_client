/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      'xxl': '1400px'
    },
    extend: {
      height: {
        '100': '100px',
        '50':'50px',
        '18':'18px',
        '30px':'30px'
      },
      width: {
        '100': '100px',
        '50':'50px',
        '18':'18px',
        '60%':'60%',
        '30px':'30px'
      },
      colors:{
        'burger':'#C3CAD9',
        'underline':'#EDEFF2',
        'title':'#4D5E80',
        'nav':'#7D8FB3',
        'name':'#6B7A99',
        'input':'#ADB8CC'
      },
      fontSize:{
        '13px':'13px',
        '12px':'12px'
      },
      borderRadius:{
        '30px':'30px'
      }
    }
  },
  plugins: [],
};
