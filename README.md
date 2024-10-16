# eslint-plugin-module-bindings-newline

An ESLint plugin to enforce newlines between module variables.

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
  eslint.configs.recommended,
  {
    plugins: {
      'module-bindings-newline': moduleBindingsNewline,
    },
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'module-bindings-newline/export-newline': 'error',
      'module-bindings-newline/import-newline': 'error',
    },
  },
];
```

### Rules

#### `module-bindings-newline/import-newline`

This rule enforces a newline between import bindings when importing multiple variables.

#### `module-bindings-newline/export-newline`

This rule enforces a newline between export bindings when exporting multiple variables.

## License

This plugin is licensed under the [MIT License](./LICENSE).

## Author

Developed by [Robert Kajic](mailto:robert@kajic.com).
