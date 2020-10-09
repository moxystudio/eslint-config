# eslint-config-base

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/eslint-config-base
[npm-image]:https://img.shields.io/npm/v/@moxy/eslint-config-base.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/eslint-config-base.svg
[david-dm-url]:https://david-dm.org/moxystudio/eslint-config?path=packages/eslint-config-base
[david-dm-image]:https://img.shields.io/david/moxystudio/eslint-config.svg?path=packages/eslint-config-base
[david-dm-dev-url]:https://david-dm.org/moxystudio/eslint-config?type=dev&path=packages/eslint-config-base
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/eslint-config.svg?path=packages/eslint-config-base

MOXY's [ESLint](http://eslint.org/) **base** configuration.

## Installation

```sh
$ npm install --save-dev eslint @moxy/eslint-config-base
```

## Usage

Create a `.eslintrc.json` file in the project root and extend from one of these base configurations:

- `@moxy/eslint-config-base` - Latest ECMAScript version without modules.
- `@moxy/eslint-config-base/esm` - Latest ECMAScript version with ECMAScript modules.
- `@moxy/eslint-config-base/cjs` - Latest ECMAScript version with CommonJS modules.

Instead of the latest ECMAScript version (2020), you may target **specific versions** of ECMAScript by using their configurations instead.

<details>
  <summary>List of all base configurations</summary>

  - `@moxy/eslint-config-base/es2015` - ECMAScript 2015 (aka es6) without modules.
  - `@moxy/eslint-config-base/es2016` - ECMAScript 2016 (aka es7) without modules.
  - `@moxy/eslint-config-base/es2017` - ECMAScript 2017 (aka es8) without modules.
  - `@moxy/eslint-config-base/es2018` - ECMAScript 2018 (aka es9) without modules.
  - `@moxy/eslint-config-base/es2019` - ECMAScript 2019 (aka es10) without modules.
  - `@moxy/eslint-config-base/es2020` - ECMAScript 2020 (aka es11) without modules.
  - `@moxy/eslint-config-base/esm/es2015` - ECMAScript 2015 (aka es6) with ECMAScript modules.
  - `@moxy/eslint-config-base/esm/es2016` - ECMAScript 2016 (aka es7) with ECMAScript modules.
  - `@moxy/eslint-config-base/esm/es2017` - ECMAScript 2017 (aka es8) with ECMAScript modules.
  - `@moxy/eslint-config-base/esm/es2018` - ECMAScript 2018 (aka es9) with ECMAScript modules.
  - `@moxy/eslint-config-base/esm/es2019` - ECMAScript 2019 (aka es10) with ECMAScript modules.
  - `@moxy/eslint-config-base/esm/es2020` - ECMAScript 2020 (aka es11) with ECMAScript modules.
  - `@moxy/eslint-config-base/cjs/es2015` - ECMAScript 2015 (aka es6) with CommonJS modules.
  - `@moxy/eslint-config-base/cjs/es2016` - ECMAScript 2016 (aka es7) with CommonJS modules.
  - `@moxy/eslint-config-base/cjs/es2017` - ECMAScript 2017 (aka es8) with CommonJS modules.
  - `@moxy/eslint-config-base/cjs/es2018` - ECMAScript 2018 (aka es9) with CommonJS modules.
  - `@moxy/eslint-config-base/cjs/es2019` - ECMAScript 2019 (aka es10) with CommonJS modules.
  - `@moxy/eslint-config-base/cjs/es2020` - ECMAScript 2020 (aka es11) with CommonJS modules.
</details>

All files that end in `.config.js` within your project root folder will **automatically be treated as Node.js** files as they relate to tooling, such as `babel.config.js` and `commitlint.config.js`.

### Examples

- Example of `.eslintrc.json` for Node.js projects:

    ```json
    {
        "root": true,
        "env": {
            "node": true
        },
        "extends": [
            "@moxy/eslint-config-base/cjs/es2019"
        ]
    }
    ```

- Example of `.eslintrc.json` for browser only projects that use ECMAScript modules:

    ```json
    {
        "root": true,
        "env": {
            "browser": true
        },
        "extends": [
            "@moxy/eslint-config-base/esm",
        ]
    }
    ```

- Example of `.eslintrc.json` for isomorphic / universal projects that use ECMAScript modules:

    ```json
    {
        "root": true,
        "env": {
            "browser": true,
            "node": true
        },
        "extends": [
            "@moxy/eslint-config-base/esm"
        ]
    }
    ```

ℹ️ Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.

## Shared functionality

This package contains functionality that may be used directly if necessary:

- [_rules_](./lib/rules)
- [_modules_](./lib/modules)
- [_test-patterns_](./lib/test-patterns.js)
