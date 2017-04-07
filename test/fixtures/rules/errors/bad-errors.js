// Disallow assignment in conditional expressions
// ---------------------------------------------------------------------
(function () {
    let f = 0;

    if (f = Math.random()) {
        console.log('foo');
    }

    if ((f = Math.random())) {
        console.log('foo');
    }
})();

// Disallow use of console
// ---------------------------------------------------------------------
console.error('hello');  // Not active

// Disallow use of constant expressions in conditions
// ---------------------------------------------------------------------
if (false) {
    console.log('foo');
}

// Disallow control characters in regular expressions
// ---------------------------------------------------------------------
if (/\x1f/.test('foo')) {
    console.log('foo');
}

// Disallow use of debugger
// ---------------------------------------------------------------------
debugger;

// Disallow duplicate arguments in functions
// ---------------------------------------------------------------------
(function () {
    function f(arg, arg) {  // eslint-disable-line no-redeclare
        console.log(arg);
    }
})();

// Disallow duplicate keys when creating object literals
// ---------------------------------------------------------------------
console.log({
    x: 1,
    x: 1,
});

// Disallow a duplicate case label
// ---------------------------------------------------------------------
(function () {
    const a = 0;

    switch (a) {
    case 1:
        console.log(a);
        break;
    case 1:
        console.log(a + 1);
        break;
    default:
    }
})();

// Disallow the use of empty character classes in regular expressions
// ---------------------------------------------------------------------
/^abc[]/.test('abcdefg');

// Disallow empty statements
// ---------------------------------------------------------------------
if (Math.random() === 1) {

}

// Disallow assigning to the exception in a catch block
// ---------------------------------------------------------------------
try {
    throw new Error('foo');
} catch (e) {
    e = 1;
} // Not active

// Disallow double-negation boolean casts in a boolean context
// ---------------------------------------------------------------------
if (!!Math.random()) {
    console.log('foo');
}

// Disallow unnecessary parentheses
// ---------------------------------------------------------------------
if (typeof (console) === 'object') {
    console.log('foo');
}

// Disallow unnecessary semicolons
// ---------------------------------------------------------------------
console.log('foo'); ;

// Disallow overwriting functions written as function declarations
// ---------------------------------------------------------------------
(function () {
    function c() {
        c = console;
    }
})();

// Disallow function or variable declarations in nested blocks
// ---------------------------------------------------------------------
(function () {
    if (f) {
        function d() { }
    }
})();

// Disallow invalid regular expression strings in the RegExp constructor
// ---------------------------------------------------------------------
(function () {
    const regExp = new RegExp('(');
})();

// Disallow irregular whitespace outside of strings and comments
// ---------------------------------------------------------------------
// Hard to test this out...

// Disallow negation of the left operand of an in expression
// ---------------------------------------------------------------------
if (!Math.random() in console) {
    console.log('foo');
}

// Disallow the use of object properties of the global object (Math and JSON) as functions
// ---------------------------------------------------------------------
console.log(Math());

// Disallow multiple spaces in a regular expression literal
// ---------------------------------------------------------------------
(function () {
    const regExp = new RegExp('(            )');
})();

// Disallow sparse arrays
// ---------------------------------------------------------------------
console.log([, ]);

// Avoid code that looks like two expressions but is actually one
// ---------------------------------------------------------------------
// Can't really test this because a lot of rules forbid it

// Disallow unreachable statements after a return, throw, continue, or break statement
// ---------------------------------------------------------------------
if (Math.random() > 0) {
    throw new Error('out of bounds');
    console.log('foo');
}

// Disallow comparisons with the value NaN
// ---------------------------------------------------------------------
if (Math.random() === NaN) {
    console.log('foo');
}

// Ensure that the results of typeof are compared against a valid string
// ---------------------------------------------------------------------
if (typeof f === 'strnig') {
    console.log('foo');
}
