import eslint from '@eslint/js';
import * as tsEslint from 'typescript-eslint';

import moduleBindingsNewline from './dist/index.js';

export default tsEslint.config(
  // Eslint and tsEslint recommended defaults.
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Ignore generated directories.
  { ignores: ['**/dist/'] },
  // Use module-bindings-newline.
  {
    plugins: { 'module-bindings-newline': moduleBindingsNewline },
    rules: {
      'module-bindings-newline/export': 'error',
      'module-bindings-newline/import': 'error',
      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: 'always',
          ExportDeclaration: 'always',
        },
      ],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
);
