// eslint.config.js
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

// This compatibility layer helps to migrate from the .eslintrc format
const compat = new FlatCompat({
  baseDirectory: process.cwd(), // Optional
});

module.exports = [
  js.configs.recommended, // Use ESLint's recommended settings
  ...compat.config({
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,
      es2021: true,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  }),
];
