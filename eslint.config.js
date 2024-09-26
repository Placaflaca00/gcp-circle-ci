// eslint.config.js
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  js.configs.recommended,
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
