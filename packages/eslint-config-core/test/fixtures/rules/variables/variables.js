/* eslint-disable no-unused-vars, strict */

let bar;

// `init-declarations` - require or disallow initialization in variable declarations
// ---------------------------------------------------------------------
// Not active
(function () {
    function f() {
        let x;

        x = 1;
        x = 2;
    }
})();

// `no-catch-shadow` - disallow catch clause parameters from shadowing variables in the outer scope
// ---------------------------------------------------------------------
// Not active because we do not support IE8 or earlier..

// `no-delete-var` - disallow deleting variables
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 0;

    delete x;
})();

// `no-label-var` - disallow labels that share a name with a variable
// ---------------------------------------------------------------------
// Labels are not allowed, see `no-labels`

// `no-shadow` - disallow variable declarations from shadowing variables declared in the outer scope
// ---------------------------------------------------------------------
// Not active
(function () {
    const a = 1;

    function f() {
        const a = 2;
    }
})();

// `no-shadow-restricted-names` - disallow identifiers from shadowing restricted names
// ---------------------------------------------------------------------
// Bad
(function () {
    function undefined() {}
})();

// `no-undef` - disallow the use of undeclared variables unless mentioned in /*global */ comments
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = y + 1;
})();

// `no-undef-init` - disallow initializing variables to undefined
// ---------------------------------------------------------------------
// Bad
(function () {
    let x = undefined;

    x = 1;
})();

// `no-undefined` - disallow the use of undefined as an identifier
// ---------------------------------------------------------------------
// Not active
bar = Math === undefined;

// `no-unused-vars` - disallow unused variables
// ---------------------------------------------------------------------
// See file ./bad-variables-with-unused.js

// `no-use-before-define` - disallow the use of variables before they are defined
// ---------------------------------------------------------------------
// Bad (variables)
(function () {
    bar = a;

    const a = 10;
})();
// Good (variables)
(function () {
    const a = 10;

    bar = a;
})();
// Bad (classes)
(function () {
    const f = new Person();

    class Person {}
})();
// Good (classes)
(function () {
    class Person {}

    const f = new Person();
})();
// Functions are simply allowed
(function () {
    a();

    function b() {}
    function a() {
        b();
    }
})();
