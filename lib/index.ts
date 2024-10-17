/* eslint-disable import-x/no-nodejs-modules */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import exportNewline from './rules/export-newline';
import importNewline from './rules/import-newline';

interface PackageJson {
  name: string;
  version: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as PackageJson;

export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules: {
    export: exportNewline,
    import: importNewline,
  },
  configs: {
    rules: {
      'module-bindings-newline/export': 'error',
      'module-bindings-newline/import': 'error',
    },
  },
};
