/* eslint-disable strict */

// `no-await-in-loop` - disallow await inside of loops
// ---------------------------------------------------------------------
// See file ./es8/errors.js

// `no-compare-neg-zero` - disallow comparing against -0
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 0;

    if (x === -0) {
        console.log(-0);
    }
})();
// Good
(function () {
    const x = 0;

    if (Object.is(x, -0)) {
        console.log(-0);
    }
})();

// `no-cond-assign` - disallow assignment operators in conditional expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    let f = 0;

    if (f = Math.random()) {
        console.log('foo');
    }
})();
// Good
(function () {
    let f = 0;

    if ((f = Math.random())) {
        console.log('foo');
    }
})();
// Also good
(function () {
    let f = 0;

    f = Math.random();

    if (f) {
        console.log('foo');
    }
})();

// `no-console` - disallow the use of console
// ---------------------------------------------------------------------
// Not active
console.error('hello');

// `no-constant-condition` - disallow constant expressions in conditions
// ---------------------------------------------------------------------
// Bad
if (false) {
    console.log('foo');
}
// Good
(function () {
    const x = false;

    if (x) {
        console.log('foo');
    }
})();

// `no-control-regex` - disallow control characters in regular expressions
// ---------------------------------------------------------------------
// Bad
if (/\x1f/.test('foo')) {
    console.log('foo');
}

// `no-debugger` - disallow the use of debugger
// ---------------------------------------------------------------------
// Disencourage
debugger;

// `no-dupe-args` - disallow duplicate arguments in function definitions
// ---------------------------------------------------------------------
// Bad
(function () {
    function f(arg, arg) {
        console.log(arg);
    }
})();
// Good
(function () {
    function f(arg1, arg2) {
        console.log(arg1, arg2);
    }
})();

// `no-dupe-keys` - disallow duplicate keys in object literals
// ---------------------------------------------------------------------
// Bad
console.log({
    x: 1,
    x: 1,
});
// Good
console.log({
    x: 1,
    y: 1,
});

// `no-duplicate-case` - disallow duplicate case labels
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = 0;

    switch (a) {
    case 1:
        console.log(a + 1);
        break;
    case 1:
        console.log(a + 2);
        break;
    default:
    }
})();
// Good
(function () {
    const a = 0;

    switch (a) {
    case 1:
        console.log(a + 1);
        break;
    case 2:
        console.log(a + 2);
        break;
    default:
    }
})();

// `no-empty` - disallow empty block statements
// ---------------------------------------------------------------------
// Bad
if (Math.random() === 1) {

}
// Good
if (Math.random() === 1) {
    console.log('not empty');
}

// `no-empty-character-class` - disallow empty character classes in regular expressions
// ---------------------------------------------------------------------
// Bad
/^abc[]/.test('abcdefg');
// Good
/^abc/.test('abcdefg');

// `no-ex-assign` - disallow reassigning exceptions in catch clauses
// ---------------------------------------------------------------------
// Not active
try {
    throw new Error('foo');
} catch (e) {
    e = 1;
}

// `no-extra-boolean-cast` - disallow unnecessary boolean casts
// ---------------------------------------------------------------------
// Bad
if (!!Math.random()) {
    console.log('foo');
}
// Good
(function () {
    const foo = !!Math.random();

    if (foo) {
        console.log('foo');
    }
})();

// `no-extra-parens` - disallow unnecessary parentheses
// ---------------------------------------------------------------------
// Bad
(function () {
    ((function foo() {}))();
})();
// Good
(function () {
    (function foo() {})();
})();
// Also Good
(function () {
    const a = typeof ('hello');
    const b = (2 * 3) + 1;

    ({}.toString.call());
})();

// `no-extra-semi` - disallow unnecessary semicolons
// ---------------------------------------------------------------------
// Bad
console.log('foo'); ;
// Good
console.log('foo');

// `no-func-assign` - disallow reassigning function declarations
// ---------------------------------------------------------------------
// Bad
(function () {
    function c() {
        c = console;
    }
})();
// Good
(function () {
    function c() {
        console.log('a func');
    }
    const d = c;
})();

// `no-inner-declarations` - disallow variable or function declarations in nested blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    const cond = true;

    if (cond) {
        function d() {}
    }
})();
// Good
(function () {
    const cond = true;

    if (cond) {
        const d = () => {};
    }
})();

// `no-invalid-regexp` - disallow invalid regular expression strings in RegExp constructors
// ---------------------------------------------------------------------
// Bad
(function () {
    const regExp = new RegExp('(');
})();
// Good
(function () {
    const regExp = new RegExp('()');
})();

// `no-irregular-whitespace` - disallow irregular whitespace outside of strings and comments
// ---------------------------------------------------------------------
// Hard to test this out...

// `no-obj-calls` - disallow calling global object properties as functions
// ---------------------------------------------------------------------
console.log(Math());

// `no-prototype-builtins` - disallow calling some Object.prototype methods directly on objects
// ---------------------------------------------------------------------
// Bad
(function () {
    function Person() {}
    const person = new Person();

    const isPrototypeOfBar = Person.prototype.isPrototypeOf(person);
})();
// Good
(function () {
    function Person() {}
    const person = new Person();

    const isPrototypeOfBar = Object.prototype.isPrototypeOf.call(Person, person);
})();

// `no-regex-spaces` - disallow multiple spaces in regular expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    const regExp = new RegExp('(            )');
})();
// Good
(function () {
    const regExp = new RegExp('(\\s+)');
})();

// `no-sparse-arrays` - disallow sparse arrays
// ---------------------------------------------------------------------
// Bad
console.log([, ]);
// Good
console.log([1, 2]);

// `no-template-curly-in-string` - disallow template literal placeholder syntax in regular strings
// ---------------------------------------------------------------------
// Bad
console.log('Hello ${name}!');
// Good
console.log(`Hello ${name}!`);

// `no-unexpected-multiline` - disallow confusing multiline expressions
// ---------------------------------------------------------------------
// Can't really test this because a lot of rules forbid it

// `no-unreachable` - disallow unreachable code after return, throw, continue, and break statements
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0) {
    throw new Error('out of bounds');
    console.log('foo');
}
// Good
if (Math.random() > 0) {
    console.log('foo');
    throw new Error('out of bounds');
}

// `no-unsafe-finally` - disallow control flow statements in finally blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    try {
        throw new Error('foo');
    } catch (err) {
        return 2;
    } finally {
        return 3;
    }
})();

// `no-unsafe-negation` - disallow negating the left operand of relational operators
// ---------------------------------------------------------------------
// Bad
if (!Math.random() in console) {
    console.log('foo');
}
// Good
if (!(Math.random() in console)) {
    console.log('foo');
}

// `use-isnan` - require calls to isNaN() when checking for NaN
// ---------------------------------------------------------------------
// Bad
if (Math.random() === NaN) {
    console.log('foo');
}
// Good
if (Math.random().isNan()) {
    console.log('foo');
}

// `valid-jsdoc` - enforce valid JSDoc comments
// ---------------------------------------------------------------------
// See file ../jsdoc/jsdoc.js

// `valid-typeof` - enforce comparing typeof expressions against valid strings
// ---------------------------------------------------------------------
// Bad
if (typeof f === 'strnig') {
    console.log('foo');
}
// Good
if (typeof f === 'string') {
    console.log('foo');
}
