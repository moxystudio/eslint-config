// React Hooks plugin - https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks

'use strict';

module.exports = {
    'rules': {
        // Checks Rules of Hooks: https://reactjs.org/docs/hooks-rules.html
        'react-hooks/rules-of-hooks': 'error',
        // Checks effect's dependencies
        'react-hooks/exhaustive-deps': 'warn',
    },
};
