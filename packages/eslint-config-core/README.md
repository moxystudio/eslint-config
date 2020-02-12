# eslint-config-core

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-core
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-core.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-core.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config-core
[travis-image]:https://img.shields.io/travis/moxystudio/eslint-config-core/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config-core
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config-core/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config-core
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config-core.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config-core?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config-core.svg

MOXY [eslint](http://eslint.org/) **core** configuration to be used by _eslint_ **base** configurations.

This package is not meant to be used directly in your projects.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-core
```

## Usage

Create a `.eslintrc.json` file in the project root using a base configuration and addons.

You need to choose the **base** configuration to use:

- `es6` - The configuration to be used in ECMAScript 6 based projects (aka 2015)
- `es7` - The configuration to be used in ECMAScript 7 based projects (aka 2016)
- `es8` - The configuration to be used in ECMAScript 8 based projects (aka 2017)
- `es9` - The configuration to be used in ECMAScript 9 based projects (aka 2018)
- `es10` - The configuration to be used in ECMAScript 10 based projects (aka 2019)
- `es11` - The configuration to be used in ECMAScript 10 based projects (aka 2020)

Example:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-core/es9",
    ]
}
```

This package also currently provides one **addon**:
- _test-patterns_
  
You can directly access **addons** provided by this package.

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-core/addons/test-patterns",
    ]
}
```
