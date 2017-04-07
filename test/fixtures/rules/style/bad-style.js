// Sort import declarations within module
// ---------------------------------------------------------------------
import z from 'z';
import a from 'a';  // Not active

// Enforce spacing inside array brackets
// ---------------------------------------------------------------------
console.log([1, 2,3]);

// Disallow or enforce spaces inside of single line blocks
// ---------------------------------------------------------------------
(function () {
    [1, 2]
    .map((x) => {return x + 1;});
})();

// Enforce consistent brace style for blocks
// ---------------------------------------------------------------------
if (Math.random() > 0.5)
{
    console.log('foo');
}

// Require camel case names
// ---------------------------------------------------------------------
(function () {
    const a_a = 1;
})();

// Enforce spacing before and after comma
// ---------------------------------------------------------------------
(function () {
    const a = [].concat(a,a);
})();

// Enforce one true comma style
// ---------------------------------------------------------------------
(function () {
    const b = {
        first: 1
        ,
        second: 2,
    };
})();

// Disallow padding inside computed properties
// ---------------------------------------------------------------------
(function () {
    const obj = { foo: 'bar' };
    const prop = 'error';
    const c = obj[ prop];
})();

// Enforces consistent naming when capturing the current execution context
// ---------------------------------------------------------------------
(function () {
    const self = this;
})();

// Require function expressions to have a name
// ---------------------------------------------------------------------
(function () {
    const a = function () {
        console.log('foo');
    };
})();  // Not active

// Enforces use of function declarations or expressions
// ---------------------------------------------------------------------
(function () {
    function ab() {
        console.log('foo');
    }
})();  // Not active

// This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
// ---------------------------------------------------------------------
(function () {
    const veryBigAndBadNameForSingleVariablesHashed = 1;
})();  // Not active

// Require identifiers to match the provided regular expression
// ---------------------------------------------------------------------
// Not active

// This option sets a specific tab width for your code
// ---------------------------------------------------------------------
(function () {
    const obj = {
      a: 2,
    };
})();

// Specify whether double or single quotes should be used in JSX attributes
// ---------------------------------------------------------------------
(function () {
    const MyComponent = <a b='c' />;
})();

// Enforces spacing between keys and values in object literal properties
// ---------------------------------------------------------------------
(function () {
    const obj = {
        a:2,
    };
})();

// Enforces spacing before and after keywords
// ---------------------------------------------------------------------
(function () {
    if (a == 1) {
        console.log('foo');
    }
})();

// Disallow mixed 'LF' and 'CRLF' as linebreaks
// ---------------------------------------------------------------------
// Can't test..

// Enforces empty lines around comments
// ---------------------------------------------------------------------
(function () {
    const a = 'before';
    /* In between */
    const b = 'after';
})();  // Not active

// Specify the maximum depth that blocks can be nested
// ---------------------------------------------------------------------
if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
                if (Math.random() > 0.5) {
                    if (Math.random() > 0.5) {
                        if (Math.random() > 0.5) {
                            console.log('This is bad');
                        }
                    }
                }
            }
        }
    }
}

// Specify the maximum length of a line in your program
// ---------------------------------------------------------------------
(function () {
    const maximumLength = 'We are writting this to check which one is the maximum length of our program. It should be somewhere around here-[ x ]';
})();

// Specify the maximum depth callbacks can be nested
// ---------------------------------------------------------------------
(function () {
    function f(cb) {
        cb();
    }

    f(() => {
        f(() => {
            f(() => {
                f(() => {
                    f(() => {
                        f(() => {
                            f(() => {});
                        });
                    });
                });
            });
        });
    });
})();

// Limits the number of parameters that can be used in the function declaration.
// ---------------------------------------------------------------------
(function () {
    function f(one, two, three, four, five, six, seven) {
        console.log('Too many args');
    }
})();

// Specify the maximum number of statement allowed in a function.
// ---------------------------------------------------------------------
(function () {
    function maxStatements() {
        let a = 1;

        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
    }
})();

// Enforce a maximum number of statements allowed per line
// ---------------------------------------------------------------------
(function () {
    function f() { if (Math.random() > 0.5) { console.log('this is'); if (Math.random() > 0) { console.log('..confusing'); } } }
})();

// Require a capital letter for constructors
// ---------------------------------------------------------------------
(function () {
    function person() {}

    const notCapital = new person();
})();

// Disallow the omission of parentheses when invoking a constructor with no arguments
// ---------------------------------------------------------------------
(function () {
    function Person() {}

    const notCapital = new Person;
})();

// Allow/disallow an empty newline after var statement
// ---------------------------------------------------------------------
(function () {
    const a = 0;
    console.log('Should have given an extra line before');
})();

// Require newline before return statement
// ---------------------------------------------------------------------
(function () {
    function f() {
        console.log('foo');
        return true;
    }
})();

// Enforce newline after each call when chaining the calls
// ---------------------------------------------------------------------
// This must be with arrow functions otherwise it has a conflict with the max statements per line rule
[1, 2, 3].filter((x) => x > 0).find((x) => x === 1).toString();

// Disallow use of the Array constructor
// ---------------------------------------------------------------------
(function () {
    const b = Array(0, 1, 2);
})();

// No-bitwise - disallow use of bitwise operators
// ---------------------------------------------------------------------
(function () {
    const a = a | b;
})();

// Disallow use of the continue statement
// ---------------------------------------------------------------------
(function () {
    for (let x; x < 2; x += 1) {
        if (x >= 1) {
            continue;
        }
    }
})();  // Not active

// Disallow comments inline after code
// ---------------------------------------------------------------------
if (Math.random() > 0.5) { // Comment
   // More comments
} // Not active

// Disallow if as the only statement in an else block
// ---------------------------------------------------------------------
if (Math.random() > 0.5) {
    console.log('foo');
} else {
    if (Math.random() < 0.5) {
        console.log('bar');
    }
}

// Disallow mixed spaces and tabs for indentation
// ---------------------------------------------------------------------
// Cant test this because of editorconfig

// Disallow multiple empty lines and only one newline at the end
// ---------------------------------------------------------------------


// Disallow negated conditions
// ---------------------------------------------------------------------
(function () {
    const a = true;

    if (!a) {
        console.log('not');
    } else {
        console.log('yes');
    }
})();  // Not active

// Disallow nested ternary expressions
// ---------------------------------------------------------------------
(function () {
    const a = Math.random() > 0.5 ? true : (Math.random() > 0.5 ? false : (Math.random() > 0.5 ? 'foo' : 'bar'));
})();

// Disallow use of the Object constructor
// ---------------------------------------------------------------------
(function () {
    const a = new Object();
})();

// Disallow use of unary operators, ++ and --
// ---------------------------------------------------------------------
(function () {
    let b = 1;
    const a = b++;
})();

// Disallow use of certain syntax in code
// ---------------------------------------------------------------------
// Nothing is disallowed

// Disallow space between function identifier and application
// ---------------------------------------------------------------------
(function () {
    function f
    () {}
})();

// Disallow the use of ternary operators
// ---------------------------------------------------------------------
(function () {
    const b = 1;
    const a = a ? b : false;
})();  // Not active

// Disallow trailing whitespace at the end of lines
// ---------------------------------------------------------------------
// Can't test this one, editor doesn't let me :(

// Disallow dangling underscores in identifiers
// ---------------------------------------------------------------------
(function () {
    const f = {
        _a() {},
    };

    f._a();
})();  // Not active

// Disallow the use of Boolean literals in conditional expressions
// ---------------------------------------------------------------------
(function () {
    const a = true ? 'foo' : 'bar';
})();

// Disallow whitespace before properties
// ---------------------------------------------------------------------
(function () {
    const obj = {};
    const prop = 'foo';
    const value = obj [prop];
})();

// Require padding inside curly braces
// ---------------------------------------------------------------------
(function () {
    const a = {a: 2};
})();

// Allow just one var statement per function
// ---------------------------------------------------------------------
(function () {
    function f() {
        const a = 3;
        const b = 4;
        const c = 1,
            d = 2;
    }
})();

// Require or disallow an newline around variable declarations
// ---------------------------------------------------------------------
// Not allowed to set multiple variables with just one `var`, see rule above

// Require assignment operator shorthand where possible or prohibit it entirely
// ---------------------------------------------------------------------
(function () {
    let x = 0;

    x += 1;
    x = x + 1;
})();  // Not active

// Enforce operators to be placed before or after line breaks
// ---------------------------------------------------------------------
(function () {
    const a = 1 +
              2;

    const b = 1
            + 2;
})();

// Enforce padding within blocks
// ---------------------------------------------------------------------
(function () {
    if (Math.random() > 0.5) {

        console.log('foo');

    }
})();

// Require quotes around object literal property names
// ---------------------------------------------------------------------
(function () {
    const a = {
        aa: 2,
        'bb': 0,
    };
})();

// Specify whether double or single quotes should be used
// ---------------------------------------------------------------------
(function () {
    const a = 'aa';
    const b = "bb";
})();

// Require JSDoc
// ---------------------------------------------------------------------
// Not active

// Enforce spacing before and after semicolons
// ---------------------------------------------------------------------
(function () {
    const x = 1 ;
})();

// Require or disallow use of semicolons instead of ASI
// ---------------------------------------------------------------------
(function () {
    const name = 'foo'
})();

// Sort variables within the same declaration block
// ---------------------------------------------------------------------
// var b, a;  // Not active

// Require or disallow space before blocks
// ---------------------------------------------------------------------
(function () {
    function f(){
        console.log('foo');
    }
})();

// Require or disallow space before function opening parenthesis
// ---------------------------------------------------------------------
(function () {
    function f () {

    }
})();

// Require or disallow spaces inside parentheses
// ---------------------------------------------------------------------
(function () {
    function f( ) {

    }
})();

// Require spaces around operators
// ---------------------------------------------------------------------
(function () {
    const a = 1+1;
})();

// Require or disallow spaces before/after unary operators
// ---------------------------------------------------------------------
console.log(typeof!console);

// Require or disallow a space immediately following the // or /* in a comment
// ---------------------------------------------------------------------
// This is right
// This too
//This is not right
/*Neither is this*/

// Require regex literals to be wrapped in parentheses
// ---------------------------------------------------------------------
(function () {
    function f() {
        return /aaa/.a();
    }
})();  // Not active

// Enforces newline at the end of file, with no multiple empty lines
// ---------------------------------------------------------------------
// Can't test this... editorconfig corrects this
