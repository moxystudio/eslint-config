# eslint-config-react-native

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-react-native
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-react-native.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-react-native.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-react-native
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-react-native
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-react-native
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-react-native

MOXY's [ESLint](http://eslint.org/) configuration **enhancer** for [React Native](https://reactnative.dev/) apps.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-react-native
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-react-native`.

This package should be used in conjunction with [`@moxy/eslint-config-base`](../eslint-config-base).

### Example

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-base/esm",
        "@moxy/eslint-config-react-native"
    ]
}
```
