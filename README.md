# eslint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/eslint-config-moxy
[downloads-image]:http://img.shields.io/npm/dm/eslint-config-moxy.svg
[npm-image]:http://img.shields.io/npm/v/eslint-config-moxy.svg
[travis-url]:https://travis-ci.org/moxystudio/eslint-config
[travis-image]:http://img.shields.io/travis/moxystudio/eslint-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg

MOXY [eslint](http://eslint.org/) configuration to be used across several JavaScript projects.


## Installation

`$ npm install --save-dev eslint eslint-config-moxy`


## Usage

First you need to choose the **base** configuration to use:

- `es5` - The configuration to be used in ECMAScript 5 based projects
- `es6` - The configuration to be used in ECMAScript 6 based projects
- `es7` - The configuration to be used in ECMAScript 7 based projects, enables `es6 modules` by default
- `es8` - The configuration to be used in ECMAScript 8 based projects, enables object spread operator by default

Then enhance it with one or more **addons**:

- `browser` - If you are going to develop code for the browser (assumes you use CommonJS or AMD)
- `node` - If you are going to develop code for NodeJS
- `node-v4-es6`: Use this instead of `node` if you are developing against NodeJS 4.x with the `es6` base configuration (disables spread and other features unavailable in the V8 engine bundled with node `v4`)
- `es6-modules`: If you are going to use ES6 import & export instead of CommonJS or AMD
- `react` - If you are going to use React and JSX (requires `es6` base configuration or higher)

Finally, simply create a `.eslintrc.json` file with the chosen base configuration and addons.


### Examples

Cutting edge ES8 with modules in the browser, using react:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es8",
        "eslint-config-moxy/addons/browser",
        "eslint-config-moxy/addons/react"
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

.. and if you are programming against NodeJS v4 please use:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es6",
        "eslint-config-moxy/addons/node-v4-es6"
    ]
}
```


Good old ES5 in NodeJS:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es5",
        "eslint-config-moxy/addons/node"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `eslint` performance because no more file lookups need to be done.


## File naming convention

If your file exports a single class, your filename should be exactly the name of the class. For other cases, the name of the file should be the same as the default exports. If the file doesn't have a default export, the name can be in `kebab-case` (e.g.: `some-file.js`).


## License

[MIT License](http://opensource.org/licenses/MIT)
