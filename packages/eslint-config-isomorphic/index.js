'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-node',
        '@moxy/eslint-config-browser',
    ].map(require.resolve),
    'overrides': [{
        'files': ['./server.js'],
        'rules': {
            'prefer-import/prefer-import-over-require': 0,
        },
    }],
};
