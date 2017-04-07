'use strict';

const eslintTop = require('eslint');
const fs = require('fs');

// `callback- return` - require return statements after callbacks
// ---------------------------------------------------------------------
// Bad
(function () {
    function f(err, callback) {
        if (err) {
            callback(err);
        }
    }

    f();
})();
// Good
(function () {
    function f(err, callback) {
        if (err) {
            return callback(err);
        }
        callback();
    }

    f();
})();

// `global-require` - require require() calls to be placed at top-level module scope
// ---------------------------------------------------------------------
(function () {
    function lint(filename) {
        const eslint = require('eslint');
        const cli = eslint.CLIEngine;

        cli.executeOnFiles([filename]);
    }

    lint();
})();
// Good
(function () {
    function lint(filename) {
        // Require defined at top of the file
        const cli = eslintTop.CLIEngine;

        cli.executeOnFiles([filename]);
    }

    lint();
})();

// `handle-callback-err` - require error handling in callbacks
// ---------------------------------------------------------------------
// Bad
(function () {
    function f(err, callback) {
        callback();
    }

    f();
})();
// Good
(function () {
    function f(err, callback) {
        if (err) {
            return callback(err);
        }
        callback();
    }

    f();
})();

// `no-mixed-requires` - disallow require calls to be mixed with regular variable declarations
// ---------------------------------------------------------------------
// This is not allowed because `one-var` is NOT allowed too

// `no-new-require` - disallow new operators with calls to require
// ---------------------------------------------------------------------
// This is not allowed because `new-cap` disallows `new require('some-module')``

// `no-path-concat` - disallow string concatenation with __dirname and __filename
// ---------------------------------------------------------------------
// Not active
(function () {
    const path = `${__dirname}/file`;
})();

// `no-process-env` - disallow the use of process.env
// ---------------------------------------------------------------------
// Not active
(function () {
    if (process.env.NODE_ENV === 'development') {
        console.log('foo');
    }
})();

// `no-process-exit` - disallow the use of process.exit()
// ---------------------------------------------------------------------
process.exit(0);  // Not active

// `no-restricted-modules` - disallow specified modules when loaded by require
// ---------------------------------------------------------------------
// Disabled, can't really test this

// `no-sync` - disallow synchronous methods
// ---------------------------------------------------------------------
// Not active
(function () {
    fs.existsSync('some/file');
})();
