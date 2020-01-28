'use strict';

module.exports = {
    'extends': [
        './addons/jest',
    ].map(require.resolve),
};

