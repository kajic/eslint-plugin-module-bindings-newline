import {
  Rule, 
} from 'eslint';

import {
  bindingsNewlineHandlerFactory, 
} from './bindings-newline-handler';


const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce placing export variables on separate lines',
      recommended: false,
    },
    fixable: 'whitespace',
    schema: [],
    messages: { newLine: 'Each exported variable should start on a new line.' },
  },

  create(context: Rule.RuleContext) {
    return { ExportNamedDeclaration: bindingsNewlineHandlerFactory(context) };
  },
};

export default rule;
