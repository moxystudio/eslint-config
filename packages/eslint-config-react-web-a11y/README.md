# eslint-config-react-web-a11y

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-react-web-a11y
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-react-web-a11y.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-react-web-a11y.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-react-web-a11y
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-react-web-a11y
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-react-web-a11y
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-react-web-a11y

MOXY's [ESLint](http://eslint.org/) accessibility rules for web projects that use [React](https://reactjs.org).

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-react-web-a11y
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-react-web-a11y`.

This package should be used in conjunction with [`@moxy/eslint-config-base`](../eslint-config-base) and [`@moxy/eslint-config-react`](../eslint-config-react).

### Example

```json
{
    "root": true,
    "env": {
        "browser": true,
    },
    "extends": [
        "@moxy/eslint-config-base/esm",
        "@moxy/eslint-config-react",
        "@moxy/eslint-config-react-web-a11y"
    ]
}
```
