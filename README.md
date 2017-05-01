# eslint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/eslint-config-moxy
[npm-image]:http://img.shields.io/npm/v/eslint-config-moxy.svg
[downloads-image]:http://img.shields.io/npm/dm/eslint-config-moxy.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config
[travis-image]:http://img.shields.io/travis/moxystudio/eslint-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/eslint-config.svg
[greenkeeper-url]:https://greenkeeper.io

MOXY [eslint](http://eslint.org/) configuration to be used across several JavaScript projects.


## Installation

`$ npm install --save-dev eslint eslint-config-moxy`

*NOTE*: `npm` v3 or greater is required for this package to work correctly until [#3458](https://github.com/eslint/eslint/issues/3458) is resolved - this means that you must run `node` v6 or greater.


## Usage

Create a `.eslintrc.json` file in the project root using a base configuration and addons.

First you need to choose the **base** configuration to use:

- `es5` - The configuration to be used in ECMAScript 5 based projects
- `es6` - The configuration to be used in ECMAScript 6 based projects
- `es7` - The configuration to be used in ECMAScript 7 based projects
- `es8` - The configuration to be used in ECMAScript 8 based projects

Then enhance it with one or more **addons**:

- `browser` - If you are going to develop code for the browser (assumes you use CommonJS or AMD)
- `node` - If you are going to develop code for NodeJS
- `es6-modules`: If you are going to use ES6 import & export instead of CommonJS or AMD
- `object-spread`: Allows to use [object rest spread](https://github.com/tc39/proposal-object-rest-spread) when destructuring objects
- `react` - If you are going to use React and JSX (requires `es6` base configuration or higher)


### Examples

Cutting edge react in the browser:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es8",
        "eslint-config-moxy/addons/browser",
        "eslint-config-moxy/addons/es6-modules",
        "eslint-config-moxy/addons/react",
        "eslint-config-moxy/addons/object-spread"
    ]
}
```

ES6 with modules in NodeJS (requires a transpiler such as Babel or similar):

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es6",
        "eslint-config-moxy/addons/es6-modules",
        "eslint-config-moxy/addons/node"
    ]
}
```

Use ES6 in NodeJS without any transpiler:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es6",
        "eslint-config-moxy/addons/node"
    ]
}
```

Old ES5 in the browser:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es5",
        "eslint-config-moxy/addons/browser"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.


## File naming convention

If your file exports a single class, your filename should be exactly the name of the class. For other cases, the name of the file should be the same as the default exports. If the file doesn't have a default export, the name can be in `kebab-case` (e.g.: `some-file.js`).


## Tests

`$ npm test`   
`$ npm test:watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
