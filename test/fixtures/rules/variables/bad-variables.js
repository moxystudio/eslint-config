// Enforce or disallow variable initializations at definition
// ---------------------------------------------------------------------
(function () {
    function f() {
        let x;

        x = 1;
        x = 2;
    }
})();  // Not active

// Disallow the catch clause parameter name being the same as a variable in the outer scope
// ---------------------------------------------------------------------
(function () {
    const err = true;

    try {
        throw new Error('foo');
    } catch (err) {
        console.log(err);
    }
})();  // Not active

// Disallow deletion of variables
// ---------------------------------------------------------------------
(function () {
    const x = 0;

    delete x;
})();

// Disallow labels that share a name with a variable
// ---------------------------------------------------------------------
(function () {
    const A = 0;

    A: console.log('foo');
})();

// Restrict usage of specified global variables
// ---------------------------------------------------------------------
// Not specified, unless for the browser

// Disallow shadowing of names such as arguments
// ---------------------------------------------------------------------
(function () {
    function undefined() {}
})();

// Disallow declaration of variables already declared in the outer scopes
// ---------------------------------------------------------------------
/* var a = 0;
function f() {
    var a = 0;
} */ // Not active

// Disallow use of undefined when initializing variables
// ---------------------------------------------------------------------
(function () {
    let x = undefined;

    x = 0;
})();

// Disallow use of undeclared variables unless mentioned in a /* global * / block
// ---------------------------------------------------------------------
(function () {
    const x = y + 1;
})();

// Disallow use of undefined variable
// ---------------------------------------------------------------------
console.log(Math === undefined);  // Not active

// Disallow declaration of variables that are not used in the code
// ---------------------------------------------------------------------
// Can't test this because we are forcing `no-unused-vars:0` to ease out tests

// Disallow use of variables before they are defined
// ---------------------------------------------------------------------
(function () {
    console.log(a);
    const a = 10;
})();
