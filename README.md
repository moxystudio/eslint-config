# eslint-config

[![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url]

[travis-url]:https://travis-ci.org/moxystudio/eslint-config
[travis-image]:https://img.shields.io/travis/moxystudio/eslint-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/eslint-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/eslint-config/master.svg

MOXY's set of [ESLint](http://eslint.org/) configuration packages to be used across several JavaScript projects.

## How it works

These repository contains two sets of _ESLint_ configurations to be used in Javascript projects:

- the **base** configuration, which defines the common ESLint rules, the ECMAScript version and the module system.
- the **enhancers**, which contain specific settings for different frameworks (jest, react or vue).

By using one or more of these packages, you can enforce the desired code styles for each type of project.

For more information on how to use each package and their specific configurations, please read the package's README by following the links below. You may also check the examples listed in [Typical Configs](#typical-configs) to see how the packages may be combined for the most common scenarios.

### Base config

The base config is published as [`@moxy/eslint-config-base`](packages/eslint-config-base), check out its README to know how to use it.

### Enhancer configs

There are a few available **enhancer** packages, which are intended to be used in conjunction with the **base** configuration:

- [`@moxy/eslint-config-babel`](packages/eslint-config-babel/) - If you are going to use [Babel](https://babeljs.io/) to transpile source code.
- [`@moxy/eslint-config-jest`](packages/eslint-config-jest/) - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests.
- [`@moxy/eslint-config-react`](packages/eslint-config-react/) - If you are going to use [React](https://reactjs.org/).
- [`@moxy/eslint-config-react-a11y`](packages/eslint-config-react-a11y/) - If you want to enforce accessibility rules in web projects based on [React](https://reactjs.org/).
- [`@moxy/eslint-config-vue`](packages/eslint-config-vue/) - If you are going to use [Vue](https://vuejs.org/).

## Typical configs

<details>
  <summary>Standard JavaScript project</summary>

  ```json
  {
      "root": true,
      "env": {
          "browser": true,
      },
      "extends": [
          "@moxy/eslint-config-base/esm",
          "@moxy/eslint-config-babel",
          "@moxy/eslint-config-jest"
      ]
  }
  ```

  ℹ️ If your project is Isomorphic / Universal, you may want to enable the `node` environment as well.
</details>

<details>
  <summary>React web project</summary>

  ```json
  {
      "root": true,
      "env": {
          "browser": true,
      },
      "extends": [
          "@moxy/eslint-config-base/esm",
          "@moxy/eslint-config-babel",
          "@moxy/eslint-config-react",
          "@moxy/eslint-config-react-a11y",
          "@moxy/eslint-config-jest"
      ]
  }
  ```

  ℹ️ If your project is Isomorphic / Universal, you may want to enable the `node` environment as well.
</details>

<details>
  <summary>Node.js project</summary>

  ```json
  {
      "root": true,
      "env": {
          "node": true,
      },
      "extends": [
          "@moxy/eslint-config-base/cjs/es2019",
          "@moxy/eslint-config-jest"
      ]
  }
  ```

  ⚠️ In the above example, we choose the `es2019` version instead of the latest ECMAScript version because there's no Babel compilation and we are restricted to what the Node.js runtime supports. Please check [node.green](https://node.green/) and select the most appropriate ECMAScript version based on the Node.js version you are targeting.
</details>

## Older versions

If you want to read the changelog of an older version, please check [here](https://github.com/moxystudio/eslint-config/blob/v10.1.1/CHANGELOG.md).

## License

[MIT License](http://opensource.org/licenses/MIT)
