// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['*.js'],
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'prettier',
    'simple-import-sort',
    'unused-imports',
    'import',
    'unicorn',
    'eslint-plugin-tsdoc',
    'jsx-a11y',
  ],
  rules: {
    //IMPORTS
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
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    //
    'no-var': ['error'],
    'object-shorthand': ['warn', 'always'],
    'no-useless-computed-key': ['warn'],
    'prefer-const': ['warn'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['warn'],
    'no-await-in-loop': ['error'],
    'no-unreachable-loop': ['error'],
    'no-constant-binary-expression': ['warn'],
    //PRETTIER
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
