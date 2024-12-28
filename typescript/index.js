// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    require.resolve('./import.js'),
    require.resolve('./strict.js'),
    require.resolve('./extension.js'),
  ],
  rules: {
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': ['warn'],
    '@typescript-eslint/method-signature-style': ['warn'],
    '@typescript-eslint/naming-convention': [
      'error',
      { format: ['PascalCase'], selector: ['typeLike', 'enumMember'] },
      {
        custom: { match: false, regex: '^I[A-Z]|^(Interface|Props|State)$' },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': ['warn'],
    '@typescript-eslint/prefer-regexp-exec': ['warn'],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        "cases": {"pascalCase": true, "camelCase": true, "kebabCase": true},
      }
    ],
    "unicorn/no-null": "off",
    "unicorn/consistent-function-scoping": [
      "error",
      {
        checkArrowFunctions: false,
      },
    ],
    "jsx-a11y/media-has-caption": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/dot-notation": "off",
    "react/jsx-pascal-case": "off",
    "react/no-array-index-key": "off",
    "react/hook-use-state": "off",
    "no-promise-executor-return": "off",
    "promise/param-names": "off",
    "unicorn/prefer-ternary": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "unicorn/no-negated-condition": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-node-protocol": "off",
    "no-lonely-if": "off",
    camelcase: "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-useless-undefined": "off",
    "no-multi-assign": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
  },
};

module.exports = config;
