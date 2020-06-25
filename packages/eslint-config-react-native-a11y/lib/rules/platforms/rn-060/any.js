// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce both accessibilityActions and onAccessibilityAction props are valid
        // Introduced in React Native v0.60:
        // - https://reactnative.dev/docs/0.60/accessibility#accessibility-actions
        // - https://reactnative.dev/blog/2019/07/03/version-60#focus-on-accessibility
        'react-native-a11y/has-valid-accessibility-actions': 'error',
    },
};
