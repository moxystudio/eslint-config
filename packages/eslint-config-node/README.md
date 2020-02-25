# eslint-config-node

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-node
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-node.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-node.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-node
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-node
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-node
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-node

MOXY [eslint](http://eslint.org/) configuration to be used in Javascript projects targeted for [NodeJS](https://nodejs.org).

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-node
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-browser`.

You can change the ECMAScript version for the **base** configuration to use:

- `es6` - The configuration to be used in ECMAScript 6 based projects (aka 2015)
- `es7` - The configuration to be used in ECMAScript 7 based projects (aka 2016)
- `es8` - The configuration to be used in ECMAScript 8 based projects (aka 2017)
- `es9` - The configuration to be used in ECMAScript 9 based projects (aka 2018)
- `es10` - The configuration to be used in ECMAScript 10 based projects (aka 2019)

The default configuration is `es10`.

### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-node"
    ]
}
```

In case you want to specify an ECMAScript version:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-node/es7"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.
