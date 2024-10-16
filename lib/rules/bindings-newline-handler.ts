import {
  Rule, 
} from 'eslint';

import type {
  ExportNamedDeclaration,
  ImportDeclaration, 
} from 'estree';


export const bindingsNewlineHandlerFactory = (context: Rule.RuleContext) => {
  return (node: ImportDeclaration | ExportNamedDeclaration) => {
    const specifiers = node.specifiers;

    // Only lint if there are multiple import specifiers
    if (specifiers.length < 2) {
      return;
    }

    // Iterate through the specifiers and check if they are on the same line
    for (let i = 1; i < specifiers.length; i++) {
      const currentSpecifier = specifiers[i];
      const previousSpecifier = specifiers[i - 1];

      // Check if the current and previous specifiers are on the same line
      if (
        currentSpecifier.loc &&
        previousSpecifier.loc &&
        currentSpecifier.loc.start.line === previousSpecifier.loc.start.line
      ) {
        context.report({
          node: currentSpecifier,
          messageId: 'newLine',
          fix(fixer: Rule.RuleFixer) {
            const tokenBefore =
              context.sourceCode.getTokenBefore(currentSpecifier);

            // Do nothing if we can't construct a valid range.
            if (!tokenBefore || !currentSpecifier.range) {
              return null;
            }

            return fixer.replaceTextRange(
              // Replace with \n, from the end of the previous token,
              // to the start of the current token,
              // which has been found to be on the same line.
              [
                tokenBefore.range[1],
                currentSpecifier.range[0],
              ],
              '\n',
            );
          },
        });
      }
    }
  };
};
