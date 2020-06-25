'use strict';

module.exports = {
    extends: [
        '../lib/rules/platforms/rn-059/android',
        '../lib/rules/platforms/rn-059/ios',
        '../lib/rules/platforms/rn-059/any',
    ].map(require.resolve),
    plugins: [
        'react-native-a11y',
    ],
};
