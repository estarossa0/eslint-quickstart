// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['*.js'],
  extends: [
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    require.resolve('./stylistic.js'),
    require.resolve('./react.js'),
    require.resolve('./best-practice.js'),
    require.resolve('./import.js'),
    require.resolve('./typescript/index.js'),
    require.resolve('./prettier.js'),
  ],
  plugins: ['unicorn', 'eslint-plugin-tsdoc', 'jsx-a11y', 'tailwindcss'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'tsdoc/syntax': 'off',
    'tailwindcss/classnames-order': ['warn'],
  },
};
