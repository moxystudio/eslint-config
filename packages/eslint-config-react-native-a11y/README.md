# eslint-config-react-native-a11y

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-react-native-a11y
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-react-native-a11y.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-react-native-a11y.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-react-native-a11y
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-react-native-a11y
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-react-native-a11y
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-react-native-a11y

MOXY's [ESLint](http://eslint.org/) accessibility rules for [React Native](https://reactnative.dev/) apps.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-react-native-a11y
```

## Usage

Create a `.eslintrc.json` file in the project root and extend from one of these configurations:

- `@moxy/eslint-config-react-native-a11y` - for apps targeting the latest version of React Native.
- `@moxy/eslint-config-react-native-a11y/rn-062` - for apps targeting React Native ~0.62.0.
- `@moxy/eslint-config-react-native-a11y/rn-061` - for apps targeting React Native ~0.61.0.
- `@moxy/eslint-config-react-native-a11y/rn-060` - for apps targeting React Native ~0.60.0.
- `@moxy/eslint-config-react-native-a11y/rn-059` - for apps targeting React Native <=0.59.10.

ℹ️ By default, the configurations above are for both iOS and Android. If you are targeting only one platform, append its name as follows:

- `@moxy/eslint-config-react-native-a11y/android`
- `@moxy/eslint-config-react-native-a11y/ios`
- `@moxy/eslint-config-react-native-a11y/rn-*/android`
- `@moxy/eslint-config-react-native-a11y/rn-*/ios`

This package should be used in conjunction with:

- [`@moxy/eslint-config-base`](../eslint-config-base)
- [`@moxy/eslint-config-react`](../eslint-config-react)
- [`@moxy/eslint-config-react-native`](../eslint-config-react-native)

### Example

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-base/esm",
        "@moxy/eslint-config-react",
        "@moxy/eslint-config-react-native",
        "@moxy/eslint-config-react-native-a11y"
    ]
}
```
