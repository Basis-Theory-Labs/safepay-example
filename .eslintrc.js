module.exports = {
  extends: '@basis-theory/eslint-config/typescript',
  rules: {
    // disable/enable any rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'node/no-unpublished-import': 'off',
    'react/display-name': 'off',
    'no-warning-comments': 'off',
  },
};
