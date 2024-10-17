import { Rule } from 'eslint';

import { bindingsNewlineHandlerFactory } from './bindings-newline-handler';

const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce placing import variables on separate lines',
      recommended: false,
    },
    fixable: 'whitespace',
    schema: [],
    messages: { newLine: 'Each imported variable should start on a new line.' },
  },

  create(context: Rule.RuleContext) {
    return { ImportDeclaration: bindingsNewlineHandlerFactory(context) };
  },
};

export default rule;
