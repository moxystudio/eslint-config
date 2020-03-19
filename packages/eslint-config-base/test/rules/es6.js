'use strict';

// `arrow-body-style` - require braces around arrow function bodies
// ---------------------------------------------------------------------
// Bad
[1, 2, 3].map((x) => { return x + 1; });
[1, 2, 3].map((x) => { return { foo: 'bar' }; });
// Good
[1, 2, 3].map((x) => x + 1);
[1, 2, 3].map((x) => ({ foo: 'bar' }));

// `arrow-parens` - require parentheses around arrow function arguments
// ---------------------------------------------------------------------
// Bad
[1, 2, 3].map(x => x + 1);
// Good
[1, 2, 3].map((x) => x + 1);

// `arrow-spacing` - enforce consistent spacing before and after the arrow in arrow functions
// ---------------------------------------------------------------------
// Bad
[1, 2, 3].map((x)=>x + 1);
// Good
[1, 2, 3].map((x) => x + 1);

// `constructor-super` - require super() calls in constructors
// ---------------------------------------------------------------------
// Bad
{
    class Test extends Array {
        constructor() {}
    }
}
// Good
{
    class Test extends Array {
        constructor() {
            super();
            this._foo = 'bar';
        }
    }
}

// `generator-star-spacing` - enforce consistent spacing around * operators in generator functions
// ---------------------------------------------------------------------
// Bad
{
    function *foo() {
        yield 1;
    }
}
// Also bad
{
    function * foo() {
        yield 1;
    }
}
// Good
{
    function* foo() {
        yield 1;
    }
}

// `no-class-assign` - disallow reassigning class members
// ---------------------------------------------------------------------
// Bad
{
    class Test {}

    Test = 1;
}

// `no-const-assign` - disallow reassigning const variables
// ---------------------------------------------------------------------
// Bad
{
    const y = 2;

    y = 1;
}
// Good
{
    let y = 2;

    y = 1;
}

// `no-dupe-class-members` - disallow duplicate class members
// ---------------------------------------------------------------------
// Bad
{
    class Test {
        foo() {}
        foo() {}
    }
}

// `no-duplicate-imports` - disallow duplicate module imports
// ---------------------------------------------------------------------
// See file ./es6-esmjs

// `no-new-symbol` - disallow new operators with the Symbol object
// ---------------------------------------------------------------------
// Bad
{
    const a = new Symbol('aaaa');
}
// Good
{
    const a = Symbol('aaaa');
}

// `no-this-before-super` - disallow this/super before calling super() in constructors
// ---------------------------------------------------------------------
// Not advisable
{
    class Test extends Array {
        constructor() {
            this.one = 1;
            super();
        }
    }
}
// Good
{
    class Test extends Array {
        constructor() {
            super();
            this.one = 1;
        }
    }
}

// `no-useless-computed-key` - disallow unnecessary computed property keys in object literals
// ---------------------------------------------------------------------
// Bad
{
    const obj = { ['foo']: 'bar' };
}
// Good
{
    const obj = { foo: 'bar' };
}

// `no-useless-constructor` - disallow unnecessary constructors
// ---------------------------------------------------------------------
// Bad
{
    class Test extends Array {
        constructor() {
            super();
        }
    }
}
// Good
{
    class Test extends Array {}
}

// `no-useless-rename` - disallow renaming import, export, and destructured assignments to the same name
// ---------------------------------------------------------------------
// This one is hard to test, so we skip it for now..

// `no-var` - require let or const instead of var
// ---------------------------------------------------------------------
// Bad
{
    var n = 0;
}
// Good
{
    const n = 0;
}

// `object-shorthand` - require or disallow method and property shorthand syntax for object literals
// ---------------------------------------------------------------------
// Bad
{
    const a = 'foo';
    const foo = {
        a: a,
    };
}
// Good
{
    const a = 'foo';
    const foo = {
        a,
    };
}

// `prefer-arrow-callback` - require arrow functions as callbacks
// ---------------------------------------------------------------------
// Bad
{
    const foo = (cb) => cb();

    foo(function () {});
}
// Good
{
    const foo = (cb) => cb();

    foo(() => {});
}

// `prefer-const` - require const declarations for variables that are never reassigned after declared
// ---------------------------------------------------------------------
// Bad
{
    let b = 0;
}
// Good
{
    const b = 0;
}

// `prefer-numeric-literals` - disallow parseInt() in favor of binary, octal, and hexadecimal literals
// ---------------------------------------------------------------------
// Bad
{
    const nr = parseInt('111110111', 2);
}
// Good
{
    const nr = 0b111110111;
}

// `prefer-rest-params` - require rest parameters instead of arguments
// ---------------------------------------------------------------------
// Bad
{
    function foo() {
        console.log(arguments);
    }
}
// Good
{
    function foo(...args) {
        console.log(args);
    }
}

// `prefer-spread` - require spread operators instead of .apply()
// ---------------------------------------------------------------------
// Bad
{
    const arr = [1, 2, 3];

    console.log(Math.max.apply(Math, arr));
}
// Good
{
    const arr = [1, 2, 3];

    console.log(Math.max(...arr));
}

// `prefer-template` - require template literals instead of string concatenation
// ---------------------------------------------------------------------
// Not advisable
console.log('a' + Math.random());
// Good
console.log(`a${Math.random()}`);

// `require-yield` - require generator functions to contain yield
// ---------------------------------------------------------------------
// Bad
{
    function* aa() {
        return 10;
    }
}
// Good
{
    function aa() {
        return 10;
    }
}

// `rest-spread-spacing` - enforce spacing between rest and spread operators and their expressions
// ---------------------------------------------------------------------
// Bad
{
    const arr = [1, 2, 3];

    console.log(Math.max(... arr));
}
// Good
{
    const arr = [1, 2, 3];

    console.log(Math.max(...arr));
}

// `template-curly-spacing` - require or disallow spacing around embedded expressions of template strings
// ---------------------------------------------------------------------
// Bad
console.log(`random: ${ Math.random() }!`);
// Good
console.log(`random: ${Math.random()}!`);

// `yield-star-spacing`- require or disallow spacing around the * in yield* expressions
// ---------------------------------------------------------------------
// Bad
{
    function* foo() {
        yield *1;
    }
}
// Also bad
{
    function* foo() {
        yield * 1;
    }
}
// Good
{
    function* foo() {
        yield* 1;
    }
}
