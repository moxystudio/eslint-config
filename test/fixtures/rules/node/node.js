'use strict';

const fs = require('fs');

// `callback-return` - require return statements after callbacks
// ---------------------------------------------------------------------
// Not active
(function () {
    function f(err, callback) {
        if (err) {
            callback(err);
        }
    }
})();

// `global-require` - require require() calls to be placed at top-level module scope
// ---------------------------------------------------------------------
// Not active
(function () {
    const someDep = require('some-dep');
})();

// `handle-callback-err` - require error handling in callbacks
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    function f(err, callback) {
        callback();
    }
})();
// Good
(function () {
    function f(err, callback) {
        if (err) {
            return callback(err);
        }

        callback();
    }
})();
// Also good
(function () {
    function f(err, callback) {
        callback(err);
    }
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
// Not active
process.exit(0);

// `no-restricted-modules` - disallow specified modules when loaded by require
// ---------------------------------------------------------------------
// All modules are allowed

// `no-sync` - disallow synchronous methods
// ---------------------------------------------------------------------
// Not active
(function () {
    fs.existsSync('some/file');
})();
