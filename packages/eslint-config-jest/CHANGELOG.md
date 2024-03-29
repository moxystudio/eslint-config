# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [13.1.0](https://github.com/moxystudio/eslint-config/compare/v13.0.3...v13.1.0) (2021-07-13)


### Features

* allow noopener in rel when using target blank ([#111](https://github.com/moxystudio/eslint-config/issues/111)) ([6a26997](https://github.com/moxystudio/eslint-config/commit/6a2699739761cc8deb7120370adebf4f07a0f048))



### [13.0.3](https://github.com/moxystudio/eslint-config/compare/v13.0.2...v13.0.3) (2020-09-05)

**Note:** Version bump only for package @moxy/eslint-config-jest





### [13.0.1](https://github.com/moxystudio/eslint-config/compare/v13.0.0...v13.0.1) (2020-08-07)


### Bug Fixes

* **jest:** lax lowercase tests ([39cede8](https://github.com/moxystudio/eslint-config/commit/39cede8f5c185d628005210906d3316a455501ba))



## [13.0.0](https://github.com/moxystudio/eslint-config/compare/v12.3.1...v13.0.0) (2020-08-07)


### ⚠ BREAKING CHANGES

* all packages have now a peerDependency on eslint v7

### Features

* add lowercase-name rule ([#107](https://github.com/moxystudio/eslint-config/issues/107)) ([a982cbb](https://github.com/moxystudio/eslint-config/commit/a982cbbfba90831cb325c72867126b24a3349741))
* upgrade to eslint v7! ([#108](https://github.com/moxystudio/eslint-config/issues/108)) ([16ba3a3](https://github.com/moxystudio/eslint-config/commit/16ba3a37c7e91c1ce6e4e7dd313c0c3cd9484ab2))



## [12.3.0](https://github.com/moxystudio/eslint-config/compare/v12.2.0...v12.3.0) (2020-07-01)


### Features

* add react native a11y enhancer ([7734e2e](https://github.com/moxystudio/eslint-config/commit/7734e2e983e41928bb5f827cec2d982adbb143fb))



## [12.2.0](https://github.com/moxystudio/eslint-config/compare/v12.1.1...v12.2.0) (2020-06-25)

**Note:** Version bump only for package @moxy/eslint-config-jest





## [12.1.1](https://github.com/moxystudio/eslint-config/compare/v12.1.0...v12.1.1) (2020-05-21)

**Note:** Version bump only for package @moxy/eslint-config-jest





# [12.1.0](https://github.com/moxystudio/eslint-config/compare/v12.0.3...v12.1.0) (2020-05-04)


### Features

* consider jest.setup.js part of testPattern ([2e2c755](https://github.com/moxystudio/eslint-config/commit/2e2c755db2636a5369e22e4ccab4a8f31e787c56))





## [12.0.3](https://github.com/moxystudio/eslint-config/compare/v12.0.2...v12.0.3) (2020-05-01)

**Note:** Version bump only for package @moxy/eslint-config-jest





## [12.0.2](https://github.com/moxystudio/eslint-config/compare/v12.0.1...v12.0.2) (2020-04-24)


### Bug Fixes

* make order work in CJS ([#95](https://github.com/moxystudio/eslint-config/issues/95)) ([d9b9262](https://github.com/moxystudio/eslint-config/commit/d9b9262c62de35775470a6d5e7b042d50dbe9c8f))





## [12.0.1](https://github.com/moxystudio/eslint-config/compare/v12.0.0...v12.0.1) (2020-04-17)


### Bug Fixes

* add files in __mock__ to test patterns ([#94](https://github.com/moxystudio/eslint-config/issues/94)) ([0819983](https://github.com/moxystudio/eslint-config/commit/0819983978df5161d05c607318882922311e3ea2))





# [12.0.0](https://github.com/moxystudio/eslint-config/compare/v11.0.3...v12.0.0) (2020-03-30)

**Note:** Version bump only for package @moxy/eslint-config-jest





## [11.0.3](https://github.com/moxystudio/eslint-config/compare/v11.0.2...v11.0.3) (2020-03-20)


### Bug Fixes

* forgot to disable jest for *.spec.js as part of v11 ([8ef54d4](https://github.com/moxystudio/eslint-config/commit/8ef54d4e8438be1764c1771580d29c0600efbddf))





## [11.0.2](https://github.com/moxystudio/eslint-config/compare/v11.0.1...v11.0.2) (2020-03-19)

**Note:** Version bump only for package @moxy/eslint-config-jest





## [11.0.1](https://github.com/moxystudio/eslint-config/compare/v11.0.0...v11.0.1) (2020-03-19)


### Bug Fixes

* workaround for peer dependencies not being updated ([f7a0d59](https://github.com/moxystudio/eslint-config/commit/f7a0d59dafbdd67c434f006e171c9acdc65dcdf8))





# [11.0.0](https://github.com/moxystudio/eslint-config/compare/v1.0.0...v11.0.0) (2020-03-19)


### Features

* new single eslint-config-babel ([#89](https://github.com/moxystudio/eslint-config/issues/89)) ([1ba56d4](https://github.com/moxystudio/eslint-config/commit/1ba56d4da96bcaae6e8450fd576f3afe60a77576))


### BREAKING CHANGES

* removed the previous three base packages in favor of just one
* added a few new rules that were missing






# RFC-0003 implementation (2020-03-13)


### Bug Fixes

* testing and versioning ([#87](https://github.com/moxystudio/eslint-config/issues/87)) ([8daa19d](https://github.com/moxystudio/eslint-config/commit/8daa19d491d8bade13da3c2f68edfdf311ea13aa))


### Code Refactoring

* implement RFC-0003 ([#86](https://github.com/moxystudio/eslint-config/issues/86)) ([10b9b2f](https://github.com/moxystudio/eslint-config/commit/10b9b2f771592248fb14fa7dbceb16b590046416))


### BREAKING CHANGES

* Refactors eslint-config into multiple packages,
according to https://github.com/moxystudio/rfcs-oss/blob/master/rfcs/0003-split-eslint-config.md
