# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [12.1.0](https://github.com/moxystudio/eslint-config/compare/v12.0.3...v12.1.0) (2020-05-04)


### Features

* consider jest.setup.js part of testPattern ([2e2c755](https://github.com/moxystudio/eslint-config/commit/2e2c755db2636a5369e22e4ccab4a8f31e787c56))





## [12.0.3](https://github.com/moxystudio/eslint-config/compare/v12.0.2...v12.0.3) (2020-05-01)


### Bug Fixes

* accept mocks in deep folders ([824e014](https://github.com/moxystudio/eslint-config/commit/824e0146180c3b96cc431c4055ba84c9887801a0))





## [12.0.2](https://github.com/moxystudio/eslint-config/compare/v12.0.1...v12.0.2) (2020-04-24)


### Bug Fixes

* make order work in CJS ([#95](https://github.com/moxystudio/eslint-config/issues/95)) ([d9b9262](https://github.com/moxystudio/eslint-config/commit/d9b9262c62de35775470a6d5e7b042d50dbe9c8f))





## [12.0.1](https://github.com/moxystudio/eslint-config/compare/v12.0.0...v12.0.1) (2020-04-17)


### Bug Fixes

* add files in __mock__ to test patterns ([#94](https://github.com/moxystudio/eslint-config/issues/94)) ([0819983](https://github.com/moxystudio/eslint-config/commit/0819983978df5161d05c607318882922311e3ea2))





# [12.0.0](https://github.com/moxystudio/eslint-config/compare/v11.0.3...v12.0.0) (2020-03-30)


### Features

* add import order rules ([#92](https://github.com/moxystudio/eslint-config/issues/92)) ([dc7040d](https://github.com/moxystudio/eslint-config/commit/dc7040d87292961f226bb5b64f6e164884ec2b73))


### BREAKING CHANGES

* added rules that enforce import order





## [11.0.3](https://github.com/moxystudio/eslint-config/compare/v11.0.2...v11.0.3) (2020-03-20)


### Bug Fixes

* forgot to disable jest for *.spec.js as part of v11 ([8ef54d4](https://github.com/moxystudio/eslint-config/commit/8ef54d4e8438be1764c1771580d29c0600efbddf))





## [11.0.2](https://github.com/moxystudio/eslint-config/compare/v11.0.1...v11.0.2) (2020-03-19)


### Bug Fixes

* fix *.config.js not being correctly set to node ([79096cc](https://github.com/moxystudio/eslint-config/commit/79096ccd0027872fb4c32c44cc3463ed290dbf02))





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
