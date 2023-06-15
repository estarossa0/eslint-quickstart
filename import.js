// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ['simple-import-sort', 'unused-imports', 'import'],
  rules: {
    'import/no-cycle': ['error'],
    'import/extensions': ['off'],
    'import/no-mutable-exports': ['error'],
    'import/no-relative-packages': ['warn'],
    'import/first': ['error'],
    'import/newline-after-import': ['warn'],
    'import/no-absolute-path': ['error'],
    'import/no-self-import': ['error'],
    'import/no-useless-path-segments': ['error'],
    'import/order': ['off'],
    'sort-imports': ['off'],
    'simple-import-sort/imports': ['warn'],
    'simple-import-sort/exports': ['warn'],
    'unused-imports/no-unused-imports': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-label-var': ['error'],
    'no-undef-init': ['warn'],
  },
};

module.exports = config;
