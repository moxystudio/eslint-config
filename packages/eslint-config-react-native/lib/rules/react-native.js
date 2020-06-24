// React Native plugin - https://github.com/Intellicode/eslint-plugin-react-native

'use strict';

module.exports = {
    rules: {
        // Detect unused StyleSheet rules in React components
        // Issues:
        // - https://github.com/Intellicode/eslint-plugin-react-native/issues/165
        // - https://github.com/Intellicode/eslint-plugin-react-native/issues/241
        // - https://github.com/Intellicode/eslint-plugin-react-native/issues/258
        'react-native/no-unused-styles': 'error',
        // Require StyleSheet keys to be sorted
        'react-native/sort-styles': ['error', 'asc'],
        // Enforce using platform specific filenames when necessary
        'react-native/split-platform-components': 'error',
        // Detect inline styles in components
        'react-native/no-inline-styles': 'error',
        // Detect color literals in styles
        'react-native/no-color-literals': 'error',
        // Detect raw text outside of Text component
        // Issues:
        // - https://github.com/Intellicode/eslint-plugin-react-native/issues/225
        'react-native/no-raw-text': 'error',
        // No Single Element Style Arrays are allowed
        'react-native/no-single-element-style-arrays': 'error',
    },
};
