/* eslint-disable import-x/no-nodejs-modules */
import fs from 'fs';
import path from 'path';
import {
  fileURLToPath, 
} from 'url';

import exportNewline from './lib/rules/export-newline';
import importNewline from './lib/rules/import-newline';


interface PackageJson {
  name: string;
  version: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.resolve(__dirname, './package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as PackageJson;

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules: {
    'export-newline': exportNewline,
    'import-newline': importNewline,
  },
  configs: {
    rules: {
      'module-bindings-newline/export-newline': 'error',
      'module-bindings-newline/import-newline': 'error',
    },
  },
};

export default plugin;
