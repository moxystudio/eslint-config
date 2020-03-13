'use strict';

module.exports = {
    'extends': [
        '../rules/vue',
    ].map(require.resolve),
    'plugins': [
        'vue',
    ],
};
