/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'576px',
      'sm':'768px',
      'md':'992px',
      'lg':'1200px'
    },
    colors:{
      'gray-burger':'#C3CAD9',
      'white-underline':'#EDEFF2',
      'gray-title':'#4D5E80',
      'gray-nav':'#7D8FB3',
      'gray-name':'#6B7A99',
      'gray-placeholder':'#ADB8CC',
      'white':'#FFFFFF'
    },
    extend: {
      height: {
        '100': '100px',
        '50':'50px',
        '18':'18px',
        '20px':'20px'
      },
      width: {
        '100': '100px',
        '50':'50px',
        '18':'18px',
        '60%':'60%',
        '20px':'20px'
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
