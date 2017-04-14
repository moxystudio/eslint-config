'use strict';

module.exports = {
    'extends': [
        './node',
    ].map(require.resolve),
    'rules': {
        // apply.foo() using the spread operator instead of .apply()
        // comment: node v4 doesn't support spread
        'prefer-spread': 0,
        // Suggest using the rest parameters instead of arguments
        // comment: node v4 doesn't support spread
        'prefer-rest-params': 0,
    },
};
