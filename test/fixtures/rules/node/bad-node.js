'use strict';

const fs = require('fs');

// Enforce return after a callback
// ---------------------------------------------------------------------
(function () {
    function f(err, callback) {
        if (err) {
            callback(err);
        }
    }

    f();
})();

// Enforce require() on top-level module scope
// ---------------------------------------------------------------------
(function () {
    function lint(filename) {
        const eslint = require('eslint');
        const cli = eslint.CLIEngine;

        cli.executeOnFiles([filename]);
    }

    lint();
})();

// Enforce error handling in callbacks
// ---------------------------------------------------------------------
(function () {
    function f(err, callback) {
        callback();
    }

    f();
})();

// Disallow mixing regular variable and require declarations
// ---------------------------------------------------------------------
// This is not allowed because `one-var` is NOT allowed too

// Disallow use of new operator with the require function
// ---------------------------------------------------------------------
// This is not allowed because `new-cap` disallows `new require('some-module')``

// Disallow string concatenation with __dirname and __filename
// ---------------------------------------------------------------------
(function () {
    const path = `${__dirname}/file`;
})();  // Not active

// Disallow process.exit()
// ---------------------------------------------------------------------
process.exit(0);  // Not active

// Restrict usage of specified node modules
// ---------------------------------------------------------------------
// Disabled, can't really test this

// Disallow use of synchronous methods
// ---------------------------------------------------------------------
(function () {
    fs.existsSync('some/file');
})();  // Not active
