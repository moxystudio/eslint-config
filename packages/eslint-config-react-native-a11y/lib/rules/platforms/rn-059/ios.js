// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce accessibilityTraits property value is valid
        // Removed from React Native v0.60+: https://reactnative.dev/docs/0.60/view#accessibilitytraits
        'react-native-a11y/has-valid-accessibility-traits': 'error',
        // Enforce that certain elements use accessibilityIgnoresInvertColors to avoid being inverted by device color settings
        'react-native-a11y/has-valid-accessibility-ignores-invert-colors': 'error',
    },
};
