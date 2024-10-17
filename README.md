# eslint-plugin-module-bindings-newline

An ESLint plugin to enforce newlines between module bindings.

## Installation

You can install this plugin using `pnpm`, `npm`, or `yarn`.

```bash
pnpm install eslint-plugin-module-bindings-newline --save-dev
```

or

```bash
npm install eslint-plugin-module-bindings-newline --save-dev
```

or

```bash
yarn add eslint-plugin-module-bindings-newline --dev
```

## Usage

### Basic Setup

In your ESLint configuration file (e.g., `eslint.config.js`), import the plugin and configure it:

```javascript
import eslint from '@eslint/js';
import moduleBindingsNewline from 'eslint-plugin-module-bindings-newline';

export default [
  // Eslint and tsEslint recommended defaults.
  eslint.configs.recommended,

  // module-bindings-newline config.
  {
    plugins: { 'module-bindings-newline': moduleBindingsNewline },
    rules: {
      'module-bindings-newline/import': 'error',
      'module-bindings-newline/export': 'error',

      // Additionally, the eslint rule object-curly-newline is recommended,
      // because module-bindings-newline only adds newlines between bindings,
      // while object-curly-newline adds newlines before and after bindings
      // (also in object expressions and object destructuring, if desired).
      'object-curly-newline': ['error', {
        ImportDeclaration: 'always',
        ExportDeclaration: 'always',
      }],
    },
  },
];
```

### Rules

#### `module-bindings-newline/import`

This rule enforces a newline between import bindings when importing multiple variables.

#### `module-bindings-newline/export`

This rule enforces a newline between export bindings when exporting multiple variables.

## License

This plugin is licensed under the [MIT License](./LICENSE).

## Author

Developed by [Robert Kajic](mailto:robert@kajic.com).
