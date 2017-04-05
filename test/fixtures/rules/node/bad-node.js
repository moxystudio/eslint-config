/* =========== | Enforce return after a callback | =========== */

function f(err, callback) {
    if (err) {
        callback(err);
    }
}

/* =================== // =================== */


/* =========== | Enforce require() on top-level module scope | =========== */

function lint(filename) {
    var eslint = require('eslint');
    var cli = require('CLIEngine');
    cli.executeOnFiles([filename]);
}

/* =================== // =================== */


/* =========== | Enforce error handling in callbacks | =========== */

function f(err, callback) {
    a();
}

/* =================== // =================== */


/* =========== | Disallow mixing regular variable and require declarations | =========== */

var a = 0, b = require('eslint');

/* =================== // =================== */


/* =========== | Disallow use of new operator with the require function | =========== */

var eslint = new require('eslint'); // not active

/* =================== // =================== */


/* =========== | Disallow string concatenation with __dirname and __filename | =========== */

var path = __dirname + 'file.js'; // not active

/* =================== // =================== */


/* =========== | Disallow process.exit() | =========== */

process.exit(0); // not active

/* =================== // =================== */


/* =========== | Restrict usage of specified node modules | =========== */

var fs = require('fs'); // not active

/* =================== // =================== */


/* =========== | Disallow use of synchronous methods | =========== */

fs.existsSync(somePath);

var contents = fs.readFileSync(somePath).toString(); // not active

/* =================== // =================== */
