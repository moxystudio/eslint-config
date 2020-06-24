import { StyleSheet } from 'react-native';

// `no-unused-styles` - Detect unused StyleSheet rules in React components
// --------------------------------------------------------------------
// Doesn't fail on 'bar' yet because of https://github.com/Intellicode/eslint-plugin-react-native/issues/165
const styles = StyleSheet.create({
    bar: {},
    foo: {},
});

export default styles;
