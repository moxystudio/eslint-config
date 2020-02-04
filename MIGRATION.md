# Migration guide


## Migrating from <= 10

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

NOTE: If you are migrating from a previous version of `@moxy/eslint-config`, note that both `@moxy/eslint-config-browser` and `@moxy/eslint-config-isomorphic` already introduce the previous `es-modules` and `babel-parser` **addons**.

- `es-modules`: If you are going to use ES6 import & export instead of CommonJS or AMD (this rule skips root `[...].config.js` files to avoid ignoring this rule in common configuration files)
- `babel-parser`: Use [babel-eslint](https://github.com/babel/babel-eslint) parser so that you may use language features that are not yet implemented in eslint (e.g.: dynamic imports)
