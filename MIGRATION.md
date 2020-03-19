# Migration guide

The previous package that existed in this repository, `@moxy/eslint-config`, has been deprecated. To learn how to migrate into the new configuration structure, read below.

## Migrating from <= 10

Until now, in order to use MOXY's eslint configuration, you would have to import the `@moxy/eslint-config` package and extend your project's eslint configuration with a **base** configuration (`es5`, `es6`, `es7`, ...) and the **addons** you wished to use (`browser`, `node`, `react`, ...).

Your `.eslintrc.json` would look similar to this:

```json
{
    "root": true,
    "extends": [
        "@moxy/eslint-config/es9",
        "@moxy/eslint-config/addons/browser",
        "@moxy/eslint-config/addons/babel-parser",
        "@moxy/eslint-config/addons/es-modules",
        "@moxy/eslint-config/addons/react"
    ]
}
```

This monolithic, multiple **addon** approach has been refactored into one **base** configuration package and several **enhancer** packages (more info on what packages exist and how to use them is in this repository's [README](README.md)).

For example, the example given above would look like this after migrating to the newest version:

```json
{
    "root": true,
    "env": {
        "browser": true,
    },
    "extends": [
        "@moxy/eslint-config-base/esm/es2018",
        "@moxy/eslint-config-babel",
        "@moxy/eslint-config-react"
    ]
}
```

...where:

- `@moxy/eslint-config/es9`and `@moxy/eslint-config/addons/es-modules` was replaced with `@moxy/eslint-config-base/esm/es2018`
- `@moxy/eslint-config/addons/browser` was replaced with ESLint's [`env`](https://eslint.org/docs/user-guide/configuring#specifying-environments).
- `@moxy/eslint-config/addons/babel-parser` was replaced with `@moxy/eslint-config-babel`
