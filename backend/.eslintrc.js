module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
  },
};
