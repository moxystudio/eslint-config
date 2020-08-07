'use strict';

// `no-await-in-loop` - disallow await inside of loops
// ---------------------------------------------------------------------
// Not advisable
(async () => {
    const userIds = ['afb32432', 'fkldst3r2'];
    const users = [];

    const fetchUser = (id) => Promise.resolve({ id });

    for (let x = 0; x < userIds.length; x += 1) {
        users.push(await fetchUser(userIds[x]));
    }

    return users;
})();
// Good
(() => {
    // Example uses https://github.com/sindresorhus/p-map
    const userIds = ['afb32432', 'fkldst3r2'];

    const fetchUser = (id) => Promise.resolve({ id });

    const users = Promise.all(userIds.map((id) => fetchUser(id)));

    return users;
})();

// `no-compare-neg-zero` - disallow comparing against -0
// ---------------------------------------------------------------------
// Bad
{
    let x = 0;

    if (x === -0) {
        x = -0;
    }
}
// Good
{
    let x = 0;

    if (Object.is(x, -0)) {
        x = -0;
    }
}

// `no-cond-assign` - disallow assignment operators in conditional expressions
// ---------------------------------------------------------------------
// Bad
{
    let foo = 0;

    if (foo = Math.random()) {
        foo = 'foo';
    }
}
// Good
{
    let foo = 0;

    if ((foo = Math.random())) {
        foo = 'foo';
    }
}
// Also good
{
    let foo = 0;

    foo = Math.random();

    if (foo) {
        foo = 'foo';
    }
}

// `no-constant-condition` - disallow constant expressions in conditions
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    if (false) {
        foo = 'foo';
    }
}
// Good
{
    let foo;
    const x = false;

    if (x) {
        foo = 'foo';
    }
}

// `no-control-regex` - disallow control characters in regular expressions
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    if (/\x1f/.test('foo')) {
        foo = 'foo';
    }
}

// `no-debugger` - disallow the use of debugger
// ---------------------------------------------------------------------
// Disencourage
debugger;

// `no-dupe-keys` - disallow duplicate keys in object literals
// ---------------------------------------------------------------------
// Bad
{
    const foo = {
        x: 1,
        x: 1,
    };
}
// Good
{
    const foo = {
        x: 1,
        y: 1,
    };
}

// `no-duplicate-case` - disallow duplicate case labels
// ---------------------------------------------------------------------
// Bad
{
    let foo;
    const a = 0;

    switch (a) {
    case 1:
        foo = 'foo';
        break;
    case 1:
        foo = 'bar';
        break;
    default:
    }
}
// Good
{
    let foo;
    const a = 0;

    switch (a) {
    case 1:
        foo = 'foo';
        break;
    case 2:
        foo = 'bar';
        break;
    default:
    }
}

// `no-empty` - disallow empty block statements
// ---------------------------------------------------------------------
// Bad
if (Math.random() === 1) {

}
// Good
{
    let foo;

    if (Math.random() === 1) {
        foo = 1;
    }
}
// Also good
if (Math.random() === 1) {
    /* Something */
}

// `no-empty-character-class` - disallow empty character classes in regular expressions
// ---------------------------------------------------------------------
// Bad
/^abc[]/.test('abcdefg');
// Good
/^abc/.test('abcdefg');

// `no-extra-boolean-cast` - disallow unnecessary boolean casts
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    if (!!Math.random()) {
        foo = 'foo';
    }
}
// Good
{
    let foo = !!Math.random();

    if (foo) {
        foo = 'foo';
    }
}

// `no-extra-parens` - disallow unnecessary parentheses
// ---------------------------------------------------------------------
// Bad
((function foo() {}))();
// Good
(function foo() {})();
// Also Good
{
    const a = typeof ('hello');
    const b = (2 * 3) + 1;

    ({}.toString.call());
}

// `no-extra-semi` - disallow unnecessary semicolons
// ---------------------------------------------------------------------
// Bad
{
    const foo = 'bar'; ;

    console.log(foo);
}
// Good
{
    const foo = 'bar';

    console.log(foo);
}

// `no-func-assign` - disallow reassigning function declarations
// ---------------------------------------------------------------------
// Bad
{
    const x = () => {
        function c() {
            c = 'foo';
        }
    };
}
// Good
{
    const x = () => {
        function c() {
            const foo = 'foo';
        }

        const d = c;
    };
}

// `no-inner-declarations` - disallow variable or function declarations in nested blocks
// ---------------------------------------------------------------------
// Bad
{
    const cond = true;

    if (cond) {
        function d() {}
    }
}
// Good
{
    const cond = true;

    if (cond) {
        const d = () => {};
    }
}

// `no-invalid-regexp` - disallow invalid regular expression strings in RegExp constructors
// ---------------------------------------------------------------------
// Bad
{
    const regExp = new RegExp('(');
}
// Good
{
    const regExp = new RegExp('()');
}

// `no-irregular-whitespace` - disallow irregular whitespace outside of strings and comments
// ---------------------------------------------------------------------
// Hard to test this out...

// `no-obj-calls` - disallow calling global object properties as functions
// ---------------------------------------------------------------------
console.log(Math());

// `no-prototype-builtins` - disallow calling some Object.prototype methods directly on objects
// ---------------------------------------------------------------------
// Bad
{
    class Person {}
    const person = new Person();

    const isPrototypeOfBar = Person.prototype.isPrototypeOf(person);
}
// Good
{
    class Person {}
    const person = new Person();

    const isPrototypeOfBar = Object.prototype.isPrototypeOf.call(Person, person);
}

// `no-regex-spaces` - disallow multiple spaces in regular expressions
// ---------------------------------------------------------------------
// Bad
{
    const regExp = new RegExp('(            )');
}
// Good
{
    const regExp = new RegExp('(\\s+)');
}

// `no-sparse-arrays` - disallow sparse arrays
// ---------------------------------------------------------------------
// Bad
{
    const foo = [ , 2];
}
// Good
{
    const foo = [1, 2];
}

// `no-template-curly-in-string` - disallow template literal placeholder syntax in regular strings
// ---------------------------------------------------------------------
// Bad
{
    const foo = 'Hello ${name}!';
}
// Good
{
    const foo = `Hello ${name}!`;
}

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
{
    const foo = () => {
        try {
            throw new Error('foo');
        } catch (err) {
            return 2;
        } finally {
            return 3;
        }
    };
}

// `no-unsafe-negation` - disallow negating the left operand of relational operators
// ---------------------------------------------------------------------
// Bad
if (!Math.random() in console) {
    // Do something
}
// Good
if (!(Math.random() in console)) {
    // Do something
}

// `use-isnan` - require calls to isNaN() when checking for NaN
// ---------------------------------------------------------------------
// Bad
if (Math.random() === NaN) {
    // Do something
}
// Good
if (Math.random().isNan()) {
    // Do something
}

// `valid-typeof` - enforce comparing typeof expressions against valid strings
// ---------------------------------------------------------------------
// Bad
if (typeof f === 'strnig') {
    // Do something
}
// Good
if (typeof f === 'string') {
    // Do something
}
