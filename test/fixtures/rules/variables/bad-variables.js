/* =========== | Enforce or disallow variable initializations at definition | =========== */

function f() {
    var x;
} // not active

/* =================== // =================== */


/* =========== | Disallow the catch clause parameter name being the same as a variable in the outer scope | =========== */

var err = "x";

try {
    throw "problem";
} catch (err) {

} // not active

/* =================== // =================== */


/* =========== | Disallow deletion of variables | =========== */

var x = 0;
delete x;

/* =================== // =================== */


/* =========== | Disallow labels that share a name with a variable | =========== */

var A = 0;
A: f();

/* =================== // =================== */


/* =========== | Restrict usage of specified global variables | =========== */

/* function onClick() {
    console.log(event);
} */ // not active

/* =================== // =================== */


/* =========== | Disallow shadowing of names such as arguments | =========== */

function undefined() {}

/* =================== // =================== */


/* =========== | Disallow declaration of variables already declared in the outer scopes | =========== */

/* var a = 0;
function f() {
    var a = 0;
} */ // not active

/* =================== // =================== */


/* =========== | Disallow use of undefined when initializing variables | =========== */

// shadowing above rewrites undefined making it a function. this won't throw error because of that
var x = undefined;

/* =================== // =================== */


/* =========== | Disallow use of undeclared variables unless mentioned in a /* global * / block | =========== */

var x = y + 1;

/* =================== // =================== */


/* =========== | Disallow use of undefined variable | =========== */

// shadowing above rewrites undefined making it a function. this won't throw error because of that
console.log(x === undefined);

/* =================== // =================== */


/* =========== | Disallow declaration of variables that are not used in the code | =========== */

var aaa = 0;

/* =================== // =================== */


/* =========== | Disallow use of variables before they are defined | =========== */

/* console.log(a);
var a = 10; */ // not active && conflicting with no-undef

/* =================== // =================== */
