//require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ["vue"],
  extends: ["plugin:vue/recommended", "@vue/eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
