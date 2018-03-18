# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.2.1"></a>
## [5.2.1](https://github.com/moxystudio/eslint-config/compare/v5.2.0...v5.2.1) (2018-03-18)


### Bug Fixes

* allow scoped requires in Jest modules ([#52](https://github.com/moxystudio/eslint-config/issues/52)) ([6269e6d](https://github.com/moxystudio/eslint-config/commit/6269e6d)), closes [#50](https://github.com/moxystudio/eslint-config/issues/50)
* disable Jest addon for source files ([#48](https://github.com/moxystudio/eslint-config/issues/48)) ([08bf0c6](https://github.com/moxystudio/eslint-config/commit/08bf0c6)), closes [#31](https://github.com/moxystudio/eslint-config/issues/31)



<a name="5.2.0"></a>
# [5.2.0](https://github.com/moxystudio/eslint-config/compare/v5.1.0...v5.2.0) (2018-02-27)


### Features

* ignore template literals in max-len rule ([519ba03](https://github.com/moxystudio/eslint-config/commit/519ba03)), closes [#49](https://github.com/moxystudio/eslint-config/issues/49)



<a name="5.1.0"></a>
# [5.1.0](https://github.com/moxystudio/eslint-config/compare/v5.0.0...v5.1.0) (2018-02-19)


### Bug Fixes

* fix invalid `prefer-import/prefer-import-over-require` ([1e7e5c1](https://github.com/moxystudio/eslint-config/commit/1e7e5c1))


### Features

* ignore language-reserved keywords for capitalized-comments ([#38](https://github.com/moxystudio/eslint-config/issues/38)) ([562edfa](https://github.com/moxystudio/eslint-config/commit/562edfa))
* prefer import  instead of require es6-modules ([1ae4568](https://github.com/moxystudio/eslint-config/commit/1ae4568)), closes [#43](https://github.com/moxystudio/eslint-config/issues/43)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/moxystudio/eslint-config/compare/v4.2.0...v5.0.0) (2018-02-05)


### Chores

* update no-restricted-properties and no-multi-spaces ([f913d74](https://github.com/moxystudio/eslint-config/commit/f913d74)), closes [#37](https://github.com/moxystudio/eslint-config/issues/37)


### Features

* prefer object spread instead of object assign ([23c89c6](https://github.com/moxystudio/eslint-config/commit/23c89c6)), closes [#30](https://github.com/moxystudio/eslint-config/issues/30)


### BREAKING CHANGES

* multiple spaces in EOL comments are no longer allowed
* usage of __defineSetter__ and __defineGetter__ are no longer allowed
* code that doesn't use spread will not pass linting



<a name="4.2.0"></a>
# [4.2.0](https://github.com/moxystudio/eslint-config/compare/v4.1.2...v4.2.0) (2017-12-24)


### Features

* add babel-parser addon ([7842d1e](https://github.com/moxystudio/eslint-config/commit/7842d1e)), closes [#34](https://github.com/moxystudio/eslint-config/issues/34)



<a name="4.1.2"></a>
## [4.1.2](https://github.com/moxystudio/eslint-config/compare/v4.1.1...v4.1.2) (2017-11-21)


### Bug Fixes

* fix es7 and es7 having sourceType set to module ([5e52ba5](https://github.com/moxystudio/eslint-config/commit/5e52ba5))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/moxystudio/eslint-config/compare/v4.1.0...v4.1.1) (2017-11-16)


### Bug Fixes

* update capitalized-comments to not be so strict ([7e1b219](https://github.com/moxystudio/eslint-config/commit/7e1b219))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/moxystudio/eslint-config/compare/v4.0.0...v4.1.0) (2017-11-15)


### Features

* add jest addon ([406a965](https://github.com/moxystudio/eslint-config/commit/406a965))
* unused vars in rest spread siblings no longer warn ([f6bebb4](https://github.com/moxystudio/eslint-config/commit/f6bebb4))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/moxystudio/eslint-config/compare/v3.2.0...v4.0.0) (2017-11-15)


### Chores

* update rules react/jsx-no-bind, react/sort-comp, react/jsx-handler-names and README; add babel-eslint ([8c3f30c](https://github.com/moxystudio/eslint-config/commit/8c3f30c))


### BREAKING CHANGES

* event handler prefix of rule react/jsx-handler-names with severity 2 is now different
