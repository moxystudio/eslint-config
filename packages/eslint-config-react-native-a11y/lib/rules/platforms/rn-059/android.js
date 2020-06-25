// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce accessibilityComponentType property value is valid
        // Removed from React Native v0.60+: https://reactnative.dev/docs/0.60/view#accessibilitycomponenttype
        'react-native-a11y/has-valid-accessibility-component-type': 'error',
        // Enforce accessibilityLiveRegion prop values must be valid
        'react-native-a11y/has-valid-accessibility-live-region': 'error',
        // Enforce importantForAccessibility property value is valid
        'react-native-a11y/has-valid-important-for-accessibility': 'error',
    },
};
