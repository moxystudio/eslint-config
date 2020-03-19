# eslint-config-babel

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-react
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-react.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-react.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-react
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-react
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-react
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-react

MOXY's [ESLint](http://eslint.org/) configuration **enhancer** for projects that use [Babel](https://babeljs.io/).

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-babel
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-babel`.

This package should be used in conjunction with [`@moxy/eslint-config-base`](../eslint-config-base).

### Example

```json
{
    "root": true,
    "env": {
        "browser": true,
    },
    "extends": [
        "@moxy/eslint-config-base/esm",
        "@moxy/eslint-config-babel"
    ]
}
```
