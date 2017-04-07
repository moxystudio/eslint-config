// `accessor-pairs` - enforce getter and setter pairs in objects
// ---------------------------------------------------------------------
// Not active
(function () {
    const obj = {
        set value(value) {
            this.val = value;
        },
    };
})();

// `array-callback-return` - enforce return statements in callbacks of array methods
// ---------------------------------------------------------------------
// Bad
[1, 2, 3].map((item) => {
    item = item + 1;
});
// Good
[1, 2, 3].map((item) => item + 1);

// class-methods-use-this - enforce that class methods utilize this
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyClass {
        sayHello() {
            return 'hello';
        }
    }
})();

// `complexity` - enforce a maximum cyclomatic complexity allowed in a program
// ---------------------------------------------------------------------
(function (x) {
    if (Math.random() > 0.5) {
        return x;
    } else if (Math.random() < 0.5) {
        return x + 1;
    } else if (Math.random() < 0.2) {
        return x + 1;
    }

    return 4; // 4rd path
})(1);  // Not active

// Require return statements to either always or never specify values
// --------------------------------------------------------------------
(function f(x) {
    if (x > 5) {
        return 1;
    }
})(1);  // Not active

// Specify curly brace conventions for all control statements
// ---------------------------------------------------------------------
if (Math.random() > 0.5)
    console.log('foo');

// Require default case in switch statements
// ---------------------------------------------------------------------
(function () {
    const x = 1;

    switch (x) {
    case 1:
        console.log('foo');
        break;
    case 2:
        console.log('foo');
        break;
    }
})();

// Enforces consistent newlines before or after dots
// ---------------------------------------------------------------------
(function () {
    const obj = {};
    const a = obj.
    a;
})();

// Encourages use of dot notation whenever possible
// ---------------------------------------------------------------------
(function () {
    const obj = {};
    const a = obj['a'];
})();

// Require the use of === and !==
// ---------------------------------------------------------------------
(function () {
    if (x == 1 || x != 5) {
        console.log('foo');
    }
})();

// Make sure for-in loops have an if statement
// ---------------------------------------------------------------------
(function () {
    const obj = {};

    for (let key in obj) {
        console.log(key);
    } // Not active */
})();

// Disallow the use of alert, confirm, and prompt
// ---------------------------------------------------------------------
alert('Hello');

// Disallow use of arguments.caller or arguments.callee
// ---------------------------------------------------------------------
(function () {
    function foo(n) {
        if (n <= 0) {
            return;
        }

        arguments.callee(n - 1);
    }
})();

// Disallow lexical declarations in case clauses
// ---------------------------------------------------------------------

(function () {
    const x = 1;

    switch (x) {
    case 1:
        const y = 0;

        break;
    default:
    }
})();

// Disallow division operators explicitly at beginning of regular expression
// ---------------------------------------------------------------------
(function () {
    function f() {
        return /f/;
    }
})();  // Not active

// Disallow else after a return in an if
// ---------------------------------------------------------------------
(function () {
    if (Math.random() > 0.5) {
        return false;
    }

    return true;
})();  // Not active

// Disallow use of empty functions
// ---------------------------------------------------------------------
(function () {
    function f() {

    }
})();  // Not active

// Disallow use of empty destructuring patterns
// ---------------------------------------------------------------------
(function () {
    const foo = [1, 2, 3];

    [] = foo;
})();

// Disallow comparisons to null without a type-checking operator
// ---------------------------------------------------------------------
(function () {
    if (x == null) {
        console.log('foo');
    }
})();  // Not active

// Disallow use of eval()
// ---------------------------------------------------------------------
eval('var a = 0');

// Disallow adding to native types
// ---------------------------------------------------------------------
Object.prototype.a = 'a';

// Disallow unnecessary function binding
// ---------------------------------------------------------------------
(function () {
    const x = function () {
        console.log('foo');
    }.bind({});
})();

// Disallow unnecessary labels
// ---------------------------------------------------------------------
(function () {
    A: for (let x = 0; x < 2; x += 1) {
        break A;
    }
})();

// Disallow fallthrough of case statements
// ---------------------------------------------------------------------
(function () {
    switch (x) {
    case 1:
        console.log('foo');
    default:
        console.log('foo');
        break;
    }
})();

// Disallow the use of leading or trailing decimal points in numeric literals
// ---------------------------------------------------------------------
(function () {
    const x = .5;
})();

// Disallow the type conversions with shorter notations
// ---------------------------------------------------------------------
(function () {
    const foo = false;
    const b = !!foo;
})();  // Not active

// Disallow use of eval()-like methods
// ---------------------------------------------------------------------
setTimeout('alert(\'Hello!\');', 1000);

// Disallow this keywords outside of classes or class-like objects
// ---------------------------------------------------------------------
// (function () {
//     function f() {
//         this.a = 'bar';
//     }
//
//     f();
// })();

// Disallow usage of __iterator__ property
// ---------------------------------------------------------------------
(function () {
    const a = {};

    a.__iterator__ = function () {};
})();

// Disallow use of labeled statements
// ---------------------------------------------------------------------
(function () {
    A: if (Math.random() > 0.5) {
        break A;
    }
})();

// Disallow unnecessary nested blocks
// ---------------------------------------------------------------------
(function () {
    {
        console.log('foo');
    }
})();

// Disallow creation of functions within loops
// ---------------------------------------------------------------------
(function () {
    for (let x; x < 2; x += 1) {
        function f() {
            console.log('Can\'t');
        }
    }
})();

// Disallow the use of magic numbers
// ---------------------------------------------------------------------
(function () {
    const dutyFreePrice = 100;
    const finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);
})();  // Not active

// Disallow use of multiple spaces
// ---------------------------------------------------------------------
(function () {
    const x =  0;
})();

// Disallow use of multiline strings
// ---------------------------------------------------------------------
(function () {
    const str = 'is this\
something cool?\
or is it not?';
})();  // Not active

// Disallow assignments to native objects or read-only global variables
// ---------------------------------------------------------------------
(function () {
    Object = 'a';
})();

// Disallow use of new operator for Function object
// ---------------------------------------------------------------------
(function () {
    const x = new Function();
})();

// Disallow creating new instances of String, Number, and Boolean
// ---------------------------------------------------------------------
(function () {
    const x = new String();
})();

// Disallow use of new operator when not part of the assignment or comparison
// ---------------------------------------------------------------------
(function () {
    function Person(name) {
        this.name = name;
    }

    new Person();
})();

// Disallow use of octal escape sequences in string literals
// ---------------------------------------------------------------------
(function () {
    const foo = 'Copyright \251';
})();

// Disallow use of (old style) octal literals
// ---------------------------------------------------------------------
(function () {
    const num = 013;
})();

// Disallow reassignment of function parameters
// ---------------------------------------------------------------------
(function () {
    function f(one, two) {
        one = two;
    }
})();  // Not active

// Disallow use of process.env
// ---------------------------------------------------------------------
(function () {
    if (process.env.NODE_ENV === 'development') {
        console.log('foo');
    }
})();  // Not active

// Disallow usage of __proto__ property
// ---------------------------------------------------------------------
(function () {
    const a = {}.__proto__;
})();

// Disallow use of assignment in return statement
// ---------------------------------------------------------------------
(function () {
    let a;

    return a = 1;
})();

// Disallow use of `javascript:` urls.
// ---------------------------------------------------------------------
location.href = 'javascript:void(0)';

// Disallow assignments where both sides are exactly the same
// ---------------------------------------------------------------------
(function () {
    let a = 1;

    a = a;
})();

// Disallow comparisons where both sides are exactly the same
// ---------------------------------------------------------------------
(function () {
    const a = 1;

    return a === a ? 'foo' : 'bar';
})();

// Disallow use of comma operator
// ---------------------------------------------------------------------
(function () {
    let a = 2;

    if (a === 1, a === 2) {
        return false;
    }
})();

// Restrict what can be thrown as an exception
// ---------------------------------------------------------------------
(function () {
    throw 'error';
})();

// Disallow unmodified conditions of loops
// ---------------------------------------------------------------------
(function () {
    const a = 0;

    while (a) {
        console.log(a);
    }
})();

// Disallow usage of expressions in statement position
// ---------------------------------------------------------------------
(function () {
    function f() {}

    f;
})();

// Disallow unused labels
// ---------------------------------------------------------------------
(function () {
    A: console.log('A'); // eslint-disable-line no-labels
    B: console.log('B'); // eslint-disable-line no-labels
})();

// Disallow unnecessary .call() and .apply()
// ---------------------------------------------------------------------
(function () {
    function f() {}

    f.call(undefined);
})();

// Disallow unnecessary concatenation of literals or template literals
// ---------------------------------------------------------------------
(function () {
    const x = 'a' + 'a';
})();

// Disallow unnecessary escape characters
// ---------------------------------------------------------------------
(function () {
    const x = '\"a';
})();

// Disallow use of void operator
// ---------------------------------------------------------------------
(function () {
    void(0);
})();

// Disallow usage of configurable warning terms in comments: e.g. todo
// ---------------------------------------------------------------------
(function () {
    // TODO
})();

// Disallow use of the with statement
// ---------------------------------------------------------------------
(function () {
    const a = { foo: 'bar' };

    with (a) {
        console.log('foo');
    }
})();

// Require use of the second argument for parseInt()
// ---------------------------------------------------------------------
(function () {
    const x = parseInt('13');
})();

// Requires immediate function invocation to be wrapped in parentheses
// ---------------------------------------------------------------------
(function () {
    const x = function f() {

    }();
})();

// Requires or disallow Yoda conditions
// ---------------------------------------------------------------------
(function () {
    const a = 'foo';

    if ('Hello' === a) {
        console.log('foo');
    }
})();
