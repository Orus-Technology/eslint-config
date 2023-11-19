module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': ["error", {
      'semi': false,
      'tabWidth': 2,
      'singleQuote': true,
      'printWidth': 80,
      'arrowParens': 'always',
      'trailingComma': 'all',
      'endOfLine': 'auto',
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'react/no-unknown-property': 'error',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}