// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const { resolve } = require('node:path')

// eslint-disable-next-line no-undef
const project = resolve(process.cwd(), 'tsconfig.json')

/** @type { import("eslint").Linter.BaseConfig } */
// eslint-disable-next-line no-undef
module.exports = {
  parserOptions: {
    ecmaVersion: 'es6',
    sourceType: 'module',
    project,
  },
  env: { browser: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['unused-imports', 'react-hooks', 'prettier', 'react-refresh'],
  ignorePatterns: [
    '.eslintrc.*js',
    'public',
    'dist',
    'node_modules',
    '.cache',
    '.vscode',
    '.idea',
    '!.lintstagedrc.*',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['**/*.json'], // Specify the extension or pattern you want to parse as JSON.
      parser: 'jsonc-eslint-parser',
    },
    {
      // preventing eslint-ts to check js file
      files: ['**/*.js?(x)'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      files: ['**/*.js?(x)'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: '2015',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'require-await': 'error',
    'no-unused-expressions': [2, { allowShortCircuit: false, allowTernary: false }],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
