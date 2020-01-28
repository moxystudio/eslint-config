# eslint-config

MOXY's set of [eslint](http://eslint.org/) configuration packages to be used across several JavaScript projects.

## Why is this different

Until now, in order to use MOXY's eslint configuration, you would have to import the `@moxy/eslint-config` package and extend your project's eslint configuration with a **base** configuration (`es5`, `es6`, `es7`, ...) and the **addons** you wished to use (`browser`, `node`, `react`, ...).

Your `.eslint.config` would look similar to this:

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

This monolithic, multiple **addon** approach has been refactored into a set of 3 different **base** configuration packages and 3 **enhancer** packages.

There is also an additional **core** package which is used by the **base** configuration packages. This package is not meant to be used directly.

### Base Configs

There are three available **base** configuration packages,

- `@moxy/eslint-config-browser` - If you are going to develop code for the browser
- `@moxy/eslint-config-node` - If you are going to develop code for [NodeJS](nodejs.org)
- `@moxy/eslint-config-isomorphic` - If you are going to develop code that targets both the browser and [NodeJS](nodejs.org)

For  `@moxy/eslint-config-node` you can select which version of ECMAScript you want to use:
- `es6` - The configuration to be used in ECMAScript 6 based projects (aka 2015)
- `es7` - The configuration to be used in ECMAScript 7 based projects (aka 2016)
- `es8` - The configuration to be used in ECMAScript 8 based projects (aka 2017)
- `es9` - The configuration to be used in ECMAScript 9 based projects (aka 2018)
- `es10` - The configuration to be used in ECMAScript 10 based projects (aka 2019). This is the default configuration.

The other two configurations are based on ECMAScript 11 (aka 2020) features.

All three of these packages are based on `@moxy/eslint-config-core`, which implements common rules. However, this configuration is not intended for direct usage.

NOTE: If you are migrating from a previous version of `@moxy/eslint-config`, note that both `@moxy/eslint-config-browser` and `@moxy/eslint-config-isomorphic` already introduce the previous `es-modules` and `babel-parser` **addons**.

- `es-modules`: If you are going to use ES6 import & export instead of CommonJS or AMD (this rule skips root `[...].config.js` files to avoid ignoring this rule in common configuration files)
- `babel-parser`: Use [babel-eslint](https://github.com/babel/babel-eslint) parser so that you may use language features that are not yet implemented in eslint (e.g.: dynamic imports)

### Enhancer configs

There are three available **enhancer** packages, which are intended to be used in conjunction with a **base** configuration,

- `@moxy/eslint-config-jest` - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests
- `@moxy/eslint-config-react` - If you are going to use [React](https://reactjs.org/)
- `@moxy/eslint-config-vue` - If you are going to use [Vue](https://vuejs.org/)


## Installation

`$ npm install --save-dev eslint @moxy/eslint-config-<DESIRED-CONFIG>`

*NOTE*: `npm` v3 or greater is required for this package to work correctly until [#3458](https://github.com/eslint/eslint/issues/3458) is resolved.


## Usage

Create a `.eslintrc.json` file in the project root using a base configuration and addons.

First you need to choose and install the **base** configuration to use:

- `@moxy/eslint-config-browser` - If you are going to develop code for the browser
- `@moxy/eslint-config-node` - If you are going to develop code for [NodeJS](nodejs.org)
- `@moxy/eslint-config-isomorphic` - If you are going to develop code that targets both the browser and [NodeJS](nodejs.org)

Then, optionally, choose and install the **enhancer** to use:

- `@moxy/eslint-config-jest` - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests
- `@moxy/eslint-config-react` - If you are going to use [React](https://reactjs.org/)
- `@moxy/eslint-config-vue` - If you are going to use [Vue](https://vuejs.org/)


### Examples

Cutting edge React in the browser:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config-browser",
        "@moxy/eslint-config-react"
    ]
}
```

Cutting edge NodeJS:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/node"
    ]
}
```

Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.


## Development

After cloning the repository, install and link the dependencies of all the packages with:

`$ lerna bootstrap`

## Tests

`$ lerna run test`

Or, inside each package:

`$ npm run test`

## Release and publish

In order to release and publish the packages in which changes have been made, run the following commands in order:

`$ npm run prerelease`

`$ npm run release`

`$ npm run postrelease`

NOTE: `lerna` already takes care of updating the version of dependencies between the packages. This means that when changing a package like `@moxy/eslint-config-core`, other packages that depend on it will also suffer changes in the `package.json` and have a _PATCH_ version bump because of it.


## License

[MIT License](http://opensource.org/licenses/MIT)
