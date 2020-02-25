# eslint-config-react

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-react
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-react.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-react.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-react
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-react
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-react
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-react

MOXY [eslint](http://eslint.org/) configuration to be used in [React](https://reactjs.org) projects.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-react
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-react`.

This package should be used in conjunction with one of the base packages, like `@moxy/eslint-config-isomorphic`.

### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-isomorphic",
        "@moxy/eslint-config-react"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.
