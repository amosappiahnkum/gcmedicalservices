module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: [
    'eslint:recommended',

    // TypeScript
    'plugin:@typescript-eslint/recommended',

    // React
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // Accessibility
    'plugin:jsx-a11y/recommended',

    // Imports
    'plugin:import/recommended',
    'plugin:import/typescript',

    // Prettier must be last
    'prettier',
  ],

  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'prettier',
  ],

  ignorePatterns: [
    'dist',
    'build',
    'node_modules',
    '.eslintrc.cjs',
  ],

  rules: {
    /* Prettier */
    'prettier/prettier': 'error',

    /* TypeScript */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',

    /* React */
    'react/react-in-jsx-scope': 'off', // React 17+
    'react/prop-types': 'off',

    /* React Refresh (Vite / Fast Refresh) */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    /* Imports */
    'import/no-unresolved': 'off', // TS handles this better
    'import/no-duplicates': 'warn',

    /* Hooks */
    'react-hooks/exhaustive-deps': 'warn',
  },
};
