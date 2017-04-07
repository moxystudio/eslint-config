// Sort import declarations within module
// ---------------------------------------------------------------------
// Not active
import z from 'z';
import a from 'a';

// Disallow duplicate module imports
// ---------------------------------------------------------------------
import { linter } from 'eslint';
import { cliEngine } from 'eslint';

console.log(linter, cliEngine);

// Require braces in arrow function body
// ---------------------------------------------------------------------
[1, 2, 3].map((x) => x + 1);  // Not active

// Require parens in arrow function arguments
// ---------------------------------------------------------------------
[1, 2, 3].map(x => x + 1);  // Not active

// Require space before/after arrow function's arrow
// ---------------------------------------------------------------------
[1, 2, 3].map((x)=>x + 1);

// Verify super() callings in constructors
// ---------------------------------------------------------------------
(function () {
    class Test extends Array {
        constructor() {}
    }
}());

// Enforce the spacing around the * in generator functions
// ---------------------------------------------------------------------
(function () {
    function* foo() {
        let index = 0;

        while (index <= 2) {
            yield index += 1;
        }
    }
})();

// Disallow modifying variables of class declarations
// ---------------------------------------------------------------------
(function () {
    class Test {}
    Test = 1;
})();

// Disallow arrow functions where they could be confused with comparisons
// ---------------------------------------------------------------------
[1, 2, 3].map((x) => x ? 2 : 3);  // Not active

// Disallow modifying variables that are declared using const
// ---------------------------------------------------------------------
(function () {
    const y = 2;

    y = 1;
})();

// Disallow duplicate name in class members
// ---------------------------------------------------------------------
(function () {
    class Test {
        f() {}
        f() {}
    }
})();

// Disallow use of the new operator with the Symbol object
// ---------------------------------------------------------------------
(function () {
    const a = new Symbol('aaaa');
})();

// Disallow to use this/super before super() calling in constructors
// ---------------------------------------------------------------------
(function () {
    class Test extends Array {
        constructor() {
            this.one = 1;
            super();
        }
    }
})();

// Disallow unnecessary constructor
// ---------------------------------------------------------------------
(function () {
    class Test extends Array {
        constructor() {
            super();
        }
    }
})();

// Require let or const instead of var
// ---------------------------------------------------------------------
(function () {
    var n = 0;
})();

// Require method and property shorthand syntax for object literals
// ---------------------------------------------------------------------
(function () {
    const a = 'foo';
    const foo = {
        a: a,
    };
})();

// Suggest using arrow functions as callbacks
// ---------------------------------------------------------------------
(function () {
    function f(cb) {
        cb();
    }

    f(function () {});
})();

// Suggest using of const declaration for variables that are never modified after declared
// ---------------------------------------------------------------------
(function () {
    let b = 0;
})();

// Suggest using the rest parameters instead of arguments
// ---------------------------------------------------------------------
(function () {
    function f() {
        console.log(arguments);
    }
})();

// Suggest using the spread operator instead of .apply()
// ---------------------------------------------------------------------
(function () {
    const arr = [1, 2, 3];

    Math.max.apply(Math, arr);
})();

// Require template literals instead of string concatenation
// ---------------------------------------------------------------------
console.log('a' + Math.random());

// Generator functions that do not have yield
// ---------------------------------------------------------------------
(function () {
    function * aa() {
        return 10;
    }
})();

// Enforce spacing around embedded expressions of template strings
// ---------------------------------------------------------------------
console.log(`x is, ${ Math.random() }!`);

// Enforce spacing around the * in yield* expressions
// ---------------------------------------------------------------------
(function () {
    function * aaa() {
        yield* 1;
    }
})();
