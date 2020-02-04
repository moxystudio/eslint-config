# eslint-config-jest

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-jest
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-jest.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-jest.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config-jest
[travis-image]:https://img.shields.io/travis/moxystudio/eslint-config-jest/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config-jest
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config-jest/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config-jest
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config-jest.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config-jest?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config-jest.svg

MOXY [eslint](http://eslint.org/) configuration to be used in testing using [jest](https://jestjs.io).


## Installation

`$ npm install --save-dev eslint @moxy/eslint-config-jest`

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


## Tests

`$ npm test`   
`$ npm test -- --watch` during development

## Release and Publish

In order to publish a new release of this package, please read the README in the root of this repository.


## License

[MIT License](http://opensource.org/licenses/MIT)
