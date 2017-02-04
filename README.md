# eslint-config

[![Greenkeeper badge](https://badges.greenkeeper.io/moxystudio/eslint-config.svg)](https://greenkeeper.io/)

MOXY [eslint](http://eslint.org/) configuration to be used across several JavaScript projects.


## Installation

`$ npm install --save-dev eslint-config-moxy eslint`


## Usage

First you need to choose the **base** configuration to use:

- `es5` - The configuration to be used in ECMAScript 5 based projects
- `es6` - The configuration to be used in ECMAScript 6 based projects

Then enhance it with one or more **addons**:

- `browser` - If you are going to develop code for the browser (having in mind IE >= 9)
- `node` - If you are going to develop code for NodeJS
- `node-v4-es6` - If you are going to develop code for NodeJS 4.x.x with the `es6` base configuration
- `es6-modules` - If you are going to use ES6 import & export (must be used with the `es6` base configuration)
- `react` - If you are going to use React and JSX (requires installation of `eslint-plugin-react` as a dev dependency)
- `react-redux` - Same as the `react` addon, but should be used if you are going to develop code using [react-redux](https://github.com/reactjs/react-redux).

Finally, simply create a `.eslintrc.json` file with the chosen base configuration and addons.


### Examples

Cutting edge ES6 with modules in the browser, using react:

```json
{
    "root": true,
    "extends": [
        "eslint-config-moxy/es6",
        "eslint-config-moxy/addons/es6-modules",
        "eslint-config-moxy/addons/browser",
        "eslint-config-moxy/addons/react"
    ]
}
```

Cutting edge ES6 with modules in NodeJS (requires babel or similar):

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
        "eslint-config-moxy/addons/node"
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

If your file exports a single class, your filename should be exactly the name of the class. For other cases, the name of the file should be the same as the default exports (prefer camelCase).


## License

[MIT License](http://opensource.org/licenses/MIT)
