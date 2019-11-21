# eslint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config
[npm-image]:http://img.shields.io/npm/v/@moxy/eslint-config.svg
[downloads-image]:http://img.shields.io/npm/dm/@moxy/eslint-config.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config
[travis-image]:http://img.shields.io/travis/moxystudio/eslint-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg

MOXY [eslint](http://eslint.org/) configuration to be used across several JavaScript projects.


## Installation

`$ npm install --save-dev eslint @moxy/eslint-moxy`

*NOTE*: `npm` v3 or greater is required for this package to work correctly until [#3458](https://github.com/eslint/eslint/issues/3458) is resolved.


## Usage

Create a `.eslintrc.json` file in the project root using a base configuration and addons.

First you need to choose the **base** configuration to use:

- `es5` - The configuration to be used in ECMAScript 5 based projects
- `es6` - The configuration to be used in ECMAScript 6 based projects (aka 2015)
- `es7` - The configuration to be used in ECMAScript 7 based projects (aka 2016)
- `es8` - The configuration to be used in ECMAScript 8 based projects (aka 2017)
- `es9` - The configuration to be used in ECMAScript 9 based projects (aka 2018)
- `es10` - The configuration to be used in ECMAScript 9 based projects (aka 2019)

Then enhance it with one or more **addons**:

- `browser` - If you are going to develop code for the browser (assumes you use CommonJS or AMD)
- `node` - If you are going to develop code for [NodeJS](nodejs.org)
- `es-modules`: If you are going to use ES6 import & export instead of CommonJS or AMD (this rule skips root `[...].config.js` files to avoid ignoring this rule in common configuration files)
- `babel-parser`: Use [babel-eslint](https://github.com/babel/babel-eslint) parser so that you may use language features that are not yet implemented in eslint (e.g.: dynamic imports)
- `react` - If you are going to use [React](https://reactjs.org/) (requires `es6` base configuration or higher)
- `jest` - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests


### Examples

Cutting edge React in the browser:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/es9",
        "@moxy/eslint-config/addons/browser",
        "@moxy/eslint-config/addons/es-modules",
        "@moxy/eslint-config/addons/react"
    ]
}
```

Cutting edge NodeJS:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/es9",
        "@moxy/eslint-config/addons/node"
    ]
}
```

Cutting edge NodeJS with ES modules (requires a transpiler such as Babel or similar):

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/es9",
        "@moxy/eslint-config/addons/node",
        "@moxy/eslint-config/addons/es-modules"
    ]
}
```

Old ES5 in the browser:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/es5",
        "@moxy/eslint-config/addons/browser"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
