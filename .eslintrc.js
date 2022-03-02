module.exports = {
  plugins: ['effector'],
  extends: [
    'airbnb-typescript-prettier',
    'plugin:effector/recommended',
    'plugin:effector/scope',
    'plugin:effector/react',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        endOfLine: 'auto',
      },
    ],
  },
}
