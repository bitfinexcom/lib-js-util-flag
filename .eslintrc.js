module.exports = {
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    'standard',
    'plugin:mocha/recommended'
  ],
  rules: {
    camelcase: 'off',
    'no-template-curly-in-string': 'off',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-identical-title': 'warn',
    'no-restricted-properties': ['error', {
      object: 'itEach',
      property: 'only',
      message: 'No exclusive tests'
    }]
  }
}
