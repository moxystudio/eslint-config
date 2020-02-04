# Contributing

This repository follows a _monorepo_ structure, for which we use [lerna](https://lerna.js.org) to manage vergions of changed packages, as well as the release and publishing process.

To learn more about what commands are available for lerna, how it works and how it can be configured, please check out [lerna's repository](https://github.com/lerna/lerna/).

It's relevant to note, though, that the main workflow using lerna has already been setup as _npm-scripts_, which means that you should not need to use lerna commands while contributing.

## Tests

In order to test all packages, you simply need to run the following command:

`$ npm run test`

## Release and publish

To release and publish the packages in which changes have been made, run:

`$ npm run release`

IMPORTANT: do not try to release a single package from that package's root directory. _Lerna_ takes care of figuring out which packages have suffered changes and only releases and publishes the updated packages. Please use the release scripts provided in the repository's root `package.json`.

We are using _lerna_ in fixed version mode, which means that when multiple packages are changed between releases, they will all be updated to the same version. We also use _conventional-commits_, which means the subject of the commit messages will decide the version bump that will occur.
