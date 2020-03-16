# eslint-config

[![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url]

[travis-url]:https://travis-ci.org/moxystudio/eslint-config
[travis-image]:https://img.shields.io/travis/moxystudio/eslint-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config/master.svg

MOXY's set of [ESLint](http://eslint.org/) configuration packages to be used across several JavaScript projects.

## How it works

These repository contains two sets of _ESLint_ configurations to be used in Javascript projects:

- the **base** configurations, which contain specific settings for each specific target (browser, node or isomorphic).
- the **enhancer** configurations, which contain specific settings for different target frameworks (jest, react or vue).

By using one or more of these packages, you can enforce the desired code styles for each type of project.

For more information on how to use each package and their specific configurations, please read the package's README by following the links below.

### Base configs

There are three available **base** configuration packages,

- [`@moxy/eslint-config-browser`](packages/eslint-config-browser/) - If you are going to develop code for the browser.
- [`@moxy/eslint-config-node`](packages/eslint-config-node/) - If you are going to develop code for [NodeJS](nodejs.org).
- [`@moxy/eslint-config-isomorphic`](packages/eslint-config-isomorphic/) - If you are going to develop code that targets both the browser and [NodeJS](nodejs.org).

### Enhancer configs

There are three available **enhancer** packages, which are intended to be used in conjunction with a **base** configuration,

- [`@moxy/eslint-config-jest`](packages/eslint-config-jest/) - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests.
- [`@moxy/eslint-config-react`](packages/eslint-config-react/) - If you are going to use [React](https://reactjs.org/).
- [`@moxy/eslint-config-react-a11y`](packages/eslint-config-react-a11y/) - If you are want to enforce accessibility rules in [React](https://reactjs.org/). Should only be used with [React](https://reactjs.org/) and [`@moxy/eslint-config-browser`](packages/eslint-config-browser/) or [`@moxy/eslint-config-isomorphic`](packages/eslint-config-isomorphic/).
- [`@moxy/eslint-config-vue`](packages/eslint-config-vue/) - If you are going to use [Vue](https://vuejs.org/).

## Older versions

If you want to read the changelog of an older version, please check [here](https://github.com/moxystudio/eslint-config/blob/v10.1.1/CHANGELOG.md).

## License

[MIT License](http://opensource.org/licenses/MIT)
