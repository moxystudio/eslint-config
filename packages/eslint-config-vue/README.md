# eslint-config-vue

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-vue
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-vue.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-vue.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config-vue
[travis-image]:https://img.shields.io/travis/moxystudio/eslint-config-vue/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config-vue
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config-vue/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config-vue
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config-vue.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config-vue?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config-vue.svg

MOXY [eslint](http://eslint.org/) configuration to be used in [Vue](https://vuejs.org) projects.


## Installation

`$ npm install --save-dev eslint @moxy/eslint-config-vue`

## Usage

Create a `.eslintrc.json` file in the project root and extend `@moxy/eslint-config-vue`.

This package should be used in conjunction with one of the base packages, like `@moxy/eslint-config-browser`.


### Examples

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-browser",
        "@moxy/eslint-config-vue"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.


## Tests

`$ npm test`   
`$ npm test -- --watch` during development

## Release and Publish

In order to publish a new release of this package, please read the README in the root of this repository.

## License

[MIT License](http://opensource.org/licenses/MIT)
