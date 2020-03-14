# eslint-config-jest

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]


[npm-url]:https://npmjs.org/package/@moxy/eslint-config-jest
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-jest.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-jest.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-jest
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-jest
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-jest
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-jest

MOXY's [ESLint](http://eslint.org/) configuration **enhancer** for projects that use [Jest](https://jestjs.io) for testing.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-jest
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-jest`.

This package should be used in conjunction with one of the base packages, like `@moxy/eslint-config-node`.

### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-node",
        "@moxy/eslint-config-jest"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.
