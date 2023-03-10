/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy", "Sans-serif"],
      DEFAULT: ["Roboto", "sans-serif"],
    },
    fontSize: {
      "2xs": ["10px", "12px"],
      xs: ["12px", "15px"],
      sm: ["14px", "16px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
    },
    fontWeight: {
      DEFAULT: "700",
      black: "900",
    },
    fontStyle: {
      DEFAULT: "normal",
    },
    colors: {
      ...colors,
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        light: "rgba(var(--color-primary), .7)",
      },
      success: {
        DEFAULT: "rgb(var(--color-success))",
        light: "rgba(var(--color-success), .7)",
      },
      error: {
        DEFAULT: "rgb(var(--color-error))",
        light: "rgba(var(--color-error), .7)",
        100: "rgba(var(--color-error), .1)",
        200: "rgba(var(--color-error), .2)",
      },
      icon: "#C3CAD9",
      secondary: {
        DEFAULT: "rgb(var(--color-secondary))",
        light: "rgba(var(--color-secondary), .2)",
      },
      main: "rgba(var(--color-main))",
      side: "rgba(var(--color-side))",
      border: "#EDEFF2",
      btn: "rgb(var(--color-btn))",
    },
    // height: (theme) => ({
    //   auto: "auto",
    //   ...theme("spacing"),
    //   full: "100%",
    //   screen: `${window.innerHeight}px`,
    // }),
    // minHeight: (theme) => ({
    //   0: "0",
    //   ...theme("spacing"),
    //   full: "100%",
    //   screen: `${window.innerHeight}px`,
    // }),
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        circle: "url('../assets/images/circle.svg')",
        loginBackground: "url('@/assets/icons/loginBackground.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
