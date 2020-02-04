# eslint-config

MOXY's set of [eslint](http://eslint.org/) configuration packages to be used across several JavaScript projects.

## How it works

Introduce base and enhancer configs concept and how it works

please visit each each package readme for how to install it.

### Base configs

There are three available **base** configuration packages,

- `@moxy/eslint-config-browser` - If you are going to develop code for the browser
- `@moxy/eslint-config-node` - If you are going to develop code for [NodeJS](nodejs.org)
- `@moxy/eslint-config-isomorphic` - If you are going to develop code that targets both the browser and [NodeJS](nodejs.org)

### Enhancer configs

There are three available **enhancer** packages, which are intended to be used in conjunction with a **base** configuration,

- `@moxy/eslint-config-jest` - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests
- `@moxy/eslint-config-react` - If you are going to use [React](https://reactjs.org/)
- `@moxy/eslint-config-vue` - If you are going to use [Vue](https://vuejs.org/)

## License

[MIT License](http://opensource.org/licenses/MIT)
