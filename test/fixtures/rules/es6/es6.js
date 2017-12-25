// `no-duplicate-imports` - disallow duplicate module imports
// ---------------------------------------------------------------------
import { linter } from 'eslint';
import { cliEngine } from 'eslint';

// `sort-imports` - enforce sorted import declarations within modules
// ---------------------------------------------------------------------
// Not active
import z from 'z';
import a from 'a';

console.log(linter, cliEngine);

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
(function () {
    class Test extends Array {
        constructor() {}
    }
})();
// Good
(function () {
    class Test extends Array {
        constructor() {
            super();
            this._foo = 'bar';
        }
    }
})();

// `generator-star-spacing` - enforce consistent spacing around * operators in generator functions
// ---------------------------------------------------------------------
// Bad
(function () {
    function *foo() {
        yield 1;
    }
})();
// Also bad
(function () {
    function * foo() {
        yield 1;
    }
})();
// Good
(function () {
    function* foo() {
        yield 1;
    }
})();

// `no-class-assign` - disallow reassigning class members
// ---------------------------------------------------------------------
// Bad
(function () {
    class Test {}
    Test = 1;
})();

// `no-confusing-arrow` - disallow arrow functions where they could be confused with comparisons
// ---------------------------------------------------------------------
// Not active
[1, 2, 3].map((x) => x ? 2 : 3);

// `no-const-assign` - disallow reassigning const variables
// ---------------------------------------------------------------------
// Bad
(function () {
    const y = 2;

    y = 1;
})();
// Good
(function () {
    let y = 2;

    y = 1;
})();

// `no-dupe-class-members` - disallow duplicate class members
// ---------------------------------------------------------------------
// Bad
(function () {
    class Test {
        f() {}
        f() {}
    }
})();

// `no-new-symbol` - disallow new operators with the Symbol object
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = new Symbol('aaaa');
})();
// Good
(function () {
    const a = Symbol('aaaa');
})();

// `no-restricted-imports` - disallow specified modules when loaded by import
// ---------------------------------------------------------------------
// Nothing is restricted..

// `no-this-before-super` - disallow this/super before calling super() in constructors
// ---------------------------------------------------------------------
// Bad
(function () {
    class Test extends Array {
        constructor() {
            this.one = 1;
            super();
        }
    }
})();
// Good
(function () {
    class Test extends Array {
        constructor() {
            super();
            this.one = 1;
        }
    }
})();

// `no-useless-computed-key` - disallow unnecessary computed property keys in object literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = { ['foo']: 'bar' };
})();
// Good
(function () {
    const obj = { foo: 'bar' };
})();

// `no-useless-constructor` - disallow unnecessary constructors
// ---------------------------------------------------------------------
// Bad
(function () {
    class Test extends Array {
        constructor() {
            super();
        }
    }
})();
// Good
(function () {
    class Test extends Array {}
})();

// `no-useless-rename` - disallow renaming import, export, and destructured assignments to the same name
// ---------------------------------------------------------------------
// This one is hard to test, so we skip it for now..

// `no-var` - require let or const instead of var
// ---------------------------------------------------------------------
// Bad
(function () {
    var n = 0;
})();
// Good
(function () {
    const n = 0;
})();

// `object-shorthand` - require or disallow method and property shorthand syntax for object literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = 'foo';
    const foo = {
        a: a,
    };
})();
// Good
(function () {
    const a = 'foo';
    const foo = {
        a,
    };
})();

// `prefer-arrow-callback` - require arrow functions as callbacks
// ---------------------------------------------------------------------
// Bad
(function () {
    function f(cb) {
        cb();
    }

    f(function () {});
})();
// Good
(function () {
    function f(cb) {
        cb();
    }

    f(() => {});
})();

// `prefer-const` - require const declarations for variables that are never reassigned after declared
// ---------------------------------------------------------------------
// Bad
(function () {
    let b = 0;
})();
// Good
(function () {
    const b = 0;
})();

// `prefer-destructuring` - require destructuring from arrays and/or objects
// ---------------------------------------------------------------------
// Not active
(function () {
    const obj1 = { foo: 'bar' };
    const obj2 = { foz: 'baz' };

    const { foo } = obj1;

    console.log(foo);
    console.log(obj2.foz);
})();

// `prefer-numeric-literals` - disallow parseInt() in favor of binary, octal, and hexadecimal literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const nr = parseInt('111110111', 2);
})();
// Good
(function () {
    const nr = 0b111110111;
})();

// `prefer-rest-params` - require rest parameters instead of arguments
// ---------------------------------------------------------------------
// Bad
(function () {
    function f() {
        console.log(arguments);
    }
})();
// Good
(function () {
    function f(...args) {
        console.log(args);
    }
})();

// `prefer-spread` - require spread operators instead of .apply()
// ---------------------------------------------------------------------
// Bad
(function () {
    const arr = [1, 2, 3];

    console.log(Math.max.apply(Math, arr));
})();
// Good
(function () {
    const arr = [1, 2, 3];

    console.log(Math.max(...arr));
})();

// `prefer-template` - require template literals instead of string concatenation
// ---------------------------------------------------------------------
// Bad
console.log('a' + Math.random());
// Good
console.log(`a${Math.random()}`);

// `require-yield` - require generator functions to contain yield
// ---------------------------------------------------------------------
// Bad
(function () {
    function* aa() {
        return 10;
    }
})();
// Good
(function () {
    function aa() {
        return 10;
    }
})();

// `rest-spread-spacing` - enforce spacing between rest and spread operators and their expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    const arr = [1, 2, 3];

    console.log(Math.max(... arr));
})();
// Good
(function () {
    const arr = [1, 2, 3];

    console.log(Math.max(...arr));
})();

// `symbol-description` - require symbol descriptions
// ---------------------------------------------------------------------
// Not active
(function () {
    const symbol1 = Symbol();
    const symbol2 = Symbol('Symbol desc');
})();

// `template-curly-spacing` - require or disallow spacing around embedded expressions of template strings
// ---------------------------------------------------------------------
// Bad
console.log(`random: ${ Math.random() }!`);
// Good
console.log(`random: ${Math.random()}!`);

// `yield-star-spacing`- require or disallow spacing around the * in yield* expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    function* foo() {
        yield *1;
    }
})();
// Also bad
(function () {
    function* foo() {
        yield * 1;
    }
})();
// Good
(function () {
    function* foo() {
        yield* 1;
    }
})();
