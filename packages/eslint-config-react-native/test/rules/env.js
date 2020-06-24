// Rule `no-undef` should be ignored for globals.
// `Intl` ought to be in the list as well because it is defined in React Native.
// However, eslint-plugin-react-native-globals does not include it yet.
const globals = [
    __DEV__,
    fetch,
    global,
    window, // Points to global
    console,
    alert,
    process,
];
