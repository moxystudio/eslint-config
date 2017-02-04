'use strict';

module.exports = {
    'extends': [
        './react',
    ].map(require.resolve),
    'rules': {
        // restrict usage of specified global variables
        // prevent usage of setState
        'react/no-set-state': 0,
    },
};
