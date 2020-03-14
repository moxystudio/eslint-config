# eslint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-isomorphic
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-isomorphic
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-isomorphic
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-isomorphic

MOXY's [ESLint](http://eslint.org/) **base** configuration for isomorphic Javascript projects (Node.js and browser).

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config
```

*NOTE*: `npm` v3 or greater is required for this package to work correctly until [#3458](https://github.com/eslint/eslint/issues/3458) is resolved.

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-isomorphic`.

### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-isomorphic
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.
