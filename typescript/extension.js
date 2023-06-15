// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/no-loop-func': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
};

module.exports = config;
