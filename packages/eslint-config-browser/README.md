# eslint-config-browser

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-browser
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-browser.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-browser.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-browser
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-browser
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-browser
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-browser

MOXY [eslint](http://eslint.org/) configuration to be used for JavaScript projects in the browser.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-browser
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-browser`.

### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-browser"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.
