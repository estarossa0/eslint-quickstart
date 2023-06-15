// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('./config.js')],
  parserOptions: {
    project: './tsconfig.json',
  },
};
