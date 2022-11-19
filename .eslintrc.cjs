// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: [
        'react',
        '@typescript-eslint',
      ],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
      ],
      rules: {
        indent: [
          'error',
          2,
        ],
        quotes: [
          'error',
          'single',
        ],
        semi: [
          'error',
          'always',
        ],
        'react/function-component-definition': [
          'off',
        ],
        'react/jsx-filename-extension': [
          'off',
        ],
        'linebreak-style': [
          'off',
        ],
        'react/jsx-one-expression-per-line': [
          'off',
        ],
        'react/button-has-type': [
          'off',
        ],
        '@typescript-eslint/ban-types': [
          'off',
        ],
        'import/no-unresolved': [
          'off',
        ],
        'import/extensions': [
          'off',
        ],
      },
    },
  ],
};
