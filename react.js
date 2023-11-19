module.exports = {
    env: {
        es2021: true,
        browser: true,
        jest: true,
    },
    extends: [
        'standard',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
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
        'react',
        'jsx-a11y',
        '@typescript-eslint'
    ],
    rules: {
        "react/self-closing-comp": "error",
        'prettier/prettier': ["error", {
            'semi': false,
            'tabWidth': 2,
            'singleQuote': true,
            'printWidth': 80,
            'arrowParens': 'always',
            'trailingComma': 'all',
            'endOfLine': 'auto',
        }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
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
    },
    ignorePatterns: [
        'node_modules'
    ]
}