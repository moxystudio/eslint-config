'use strict';

module.exports = {
    'env': {
        'node': true,
    },
    'extends': [
        '../rules/node',
    ].map(require.resolve),
};
