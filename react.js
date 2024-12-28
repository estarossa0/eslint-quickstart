// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['next'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/button-has-type': ['warn'],
    'react/function-component-definition': ['off'],
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-curly-brace-presence': ['warn'],
    'react/jsx-fragments': ['warn'],
    'react/jsx-no-leaked-render': ['warn'],
    'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-sort-props': ['warn', { reservedFirst: ['key'] }],
    'react/no-unknown-property': ['off'],
    'react/no-unstable-nested-components': ['error'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/self-closing-comp': ['warn'],
    'react/jsx-pascal-case': 'off',
    'react/no-array-index-key': 'off',
    'react/hook-use-state': 'off',
    'react/jsx-key': 'off',
  },
};

module.exports = config;
