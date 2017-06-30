'use strict';

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

// `block-scoped-var` - enforce the use of variables within the scope they are defined
// ---------------------------------------------------------------------
// See file ./es5/best-practices.js

// `class-methods-use-this` - enforce that class methods utilize this
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
// Not active
(function () {
    if (Math.random() > 0.5) {
        return 1;
    } else if (Math.random() < 0.5) {
        return 2;
    } else if (Math.random() < 0.2) {
        return 3;
    }

    return 4; // 4rd path
})();

// `consistent-return` - require return statements to either always or never specify values
// --------------------------------------------------------------------
// Not active
(function () {
    if (Math.random() > 0.5) {
        return 1;
    }
})();

// `curly` - enforce consistent brace style for all control statements
// ---------------------------------------------------------------------
if (Math.random() > 0.5)
    console.log('foo');

// `default-case` - require default cases in switch statements
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1;

    switch (x) {
    case 1:
        console.log('foo');
        break;
    }
})();
// Good
(function () {
    const x = 1;

    switch (x) {
    case 1:
        console.log('foo');
        break;
    default:
    }
})();

// `dot-location` - enforce consistent newlines before and after dots
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = {};
    const a = obj.
    a;
})();
// Good
(function () {
    const obj = {};
    const a = obj.a;
    const b = obj
    .a;
})();

// `dot-notation` - enforce dot notation whenever possible
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = {};
    const a = obj['a'];
})();
// Good
(function () {
    const obj = {};
    const a = obj.a;
})();

// `eqeqeq` - require the use of === and !==
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = Math.random();

    if (x == 0.5 || x != 0.3) {
        console.log('foo');
    }
})();
// Good
(function () {
    const x = Math.random();

    if (x === 0.5 || x !== 0.3) {
        console.log('foo');
    }
    if (x != null) {
        console.log('foo');
    }
})();

// `guard-for-in` - require for-in loops to include an if statement
// ---------------------------------------------------------------------
// Not active
(function () {
    const obj = {};

    for (const key in obj) {
        console.log(key);
    }
})();

// `no-alert` - disallow the use of alert, confirm, and prompt
// ---------------------------------------------------------------------
alert('Hello');
confirm('Hello');
prompt('What\'s your name?');

// `no-caller` - disallow the use of arguments.caller or arguments.callee
// ---------------------------------------------------------------------
(function () {
    function foo(n) {
        if (n <= 0) {
            return;
        }

        arguments.callee(n - 1);
    }
})();

// `no-case-declarations` - disallow lexical declarations in case clauses
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1;

    switch (x) {
    case 1:
        const y = 0;

        break;
    default:
    }
})();
// Good
(function () {
    const x = 1;

    switch (x) {
    case 1: {
        const y = 0;

        break;
    }
    default:
    }
})();

// `no-div-regex` - disallow division operators explicitly at the beginning of regular expressions
// ---------------------------------------------------------------------
// Not active
(function () {
    console.log(/=foo/.test('foo'));
})();

// `no-else-return` - disallow else blocks after return statements in if statements
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() > 0.5) {
        return false;
    } else {
        return true;
    }
})();
// Good
(function () {
    if (Math.random() > 0.5) {
        return false;
    }

    return true;
})();

// `no-empty-function` - disallow empty functions
// ---------------------------------------------------------------------
// Not active
(function () {
    function f() {

    }
})();

// `no-empty-pattern` - disallow empty destructuring patterns
// ---------------------------------------------------------------------
// Bad
(function () {
    const foo = [1, 2, 3];
    const [] = foo;
})();
// Good
(function () {
    const foo = [1, 2, 3];
    const [first] = foo;
})();

// `no-eq-null` - disallow null comparisons without type-checking operators
// ---------------------------------------------------------------------
// Not active
(function () {
    const x = 1;

    if (x == null) {
        console.log('foo');
    }
})();

// `no-eval` - disallow the use of eval()
// ---------------------------------------------------------------------
eval('var a = 0');

// `no-extend-native` - disallow extending native types
// ---------------------------------------------------------------------
Object.prototype.a = 'a';

// `no-extra-bind` - disallow unnecessary calls to .bind()
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = function () {
        console.log('foo');
    }.bind({});
})();
// Good
(function () {
    const x = function () {
        console.log('foo');
    };
})();

// `no-extra-label` - disallow unnecessary labels
// ---------------------------------------------------------------------
// Labels are not allowed, see: `no-labels`

// `no-fallthrough` - disallow fallthrough of case statements
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1;

    switch (x) {
    case 1:
        console.log('foo');
    default:
        console.log('bar');
        break;
    }
})();
// Good
(function () {
    const x = 1;

    switch (x) {
    case 1:
        console.log('foo');
        // fallsthrough
    case 2:
        console.log('foo');
        // falls through
    default:
        console.log('bar');
        break;
    }
})();

// `no-floating-decimal` - disallow leading or trailing decimal points in numeric literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = .5;
})();
// Good
(function () {
    const x = 0.5;
})();

// `no-global-assign` - disallow assignments to native objects or read-only global variables
// ---------------------------------------------------------------------
window = {};
Object = 'a';

// `no-implicit-coercion` - disallow shorthand type conversions
// ---------------------------------------------------------------------
// Not active
(function () {
    const foo = false;
    const b = !!foo;
})();

// `no-implicit-globals` - disallow variable and function declarations in the global scope
// ---------------------------------------------------------------------
// See file ./no-implicit-globals/no-implicit-globals.js

// `no-implied-eval` - disallow the use of eval()-like methods
// ---------------------------------------------------------------------
setTimeout('alert(\'Hello!\');', 1000);

// `no-invalid-this` - disallow this keywords outside of classes or class-like objects
// ---------------------------------------------------------------------
(function () {
    function f() {
        this.a = 'bar';
    }

    f();
})();

// `no-iterator` - disallow the use of the __iterator__ property
// ---------------------------------------------------------------------
(function () {
    const a = {};

    a.__iterator__ = function () {};
})();

// `no-labels` - disallow labeled statements
// ---------------------------------------------------------------------
(function () {
    A: if (Math.random() > 0.5) {
        break A;
    }
})();

// `no-lone-blocks` - disallow unnecessary nested blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    {
        console.log('foo');
    }
})();
// Good
(function () {
    console.log('foo');
})();

// `no-loop-func` - disallow function declarations and expressions inside loop statements
// ---------------------------------------------------------------------
(function () {
    for (let x; x < 2; x += 1) {
        function f() {
            console.log('Can\'t');
        }
    }
})();

// `no-magic-numbers` - disallow magic numbers
// ---------------------------------------------------------------------
// Not active
(function () {
    const dutyFreePrice = 100;
    const finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);
})();

// `no-multi-spaces` - disallow multiple spaces
// ---------------------------------------------------------------------
// Bad
(function () {
    const x =  0;
})();
// Good
(function () {
    const x = 0;
})();

//  `no-multi-str` - disallow multiline strings
// ---------------------------------------------------------------------
// Not active
(function () {
    const str = 'is this\
something cool?\
or is it not?';
})();

// `no-new` - disallow new operators outside of assignments or comparisons
// ---------------------------------------------------------------------
(function () {
    function Person() {}
    new Person();
})();

// `no-new-func` - disallow new operators with the Function object
// ---------------------------------------------------------------------
(function () {
    const f = new Function();
})();

// `no-new-wrappers` - disallow new operators with the String, Number, and Boolean objects
// ---------------------------------------------------------------------
(function () {
    const x = new String();
})();

// `no-octal` - Disallow use of (old style) octal literals
// ---------------------------------------------------------------------
// See file ./best-practices-non-strict.js

// `no-octal-escape` - disallow use of octal escape sequences in string literals
// ---------------------------------------------------------------------
// See file ./best-practices-non-strict.js

// `no-param-reassign` - disallow reassignment of function parameters
// ---------------------------------------------------------------------
// Not active
(function () {
    function f(one, two) {
        one = two;
    }
})();

// `no-proto` - disallow the use of the __proto__ property
// ---------------------------------------------------------------------
(function () {
    const a = {}.__proto__;
})();

// `no-redeclare` - disallow variable redeclaration
// ---------------------------------------------------------------------
// See file ./es5/best-practices.js

// `no-restricted-properties` - disallow certain properties on certain objects
// ---------------------------------------------------------------------
// Not active

// `no-return-assign` - disallow assignment operators in return statements
// ---------------------------------------------------------------------
// Bad
(function () {
    let a;

    return a = 1;
})();
// Good
(function () {
    let a;

    return (a = 1);
})();
// Also good
(function () {
    let a = null;

    a = 1;

    return a;
})();

// no-return-await - disallow unnecessary return await
// ---------------------------------------------------------------------
// See file ./es8/best-practices.js

// `no-script-url` - disallow javascript: urls
// ---------------------------------------------------------------------
location.href = 'javascript:void(0)';

// `no-self-assign` - disallow assignments where both sides are exactly the same
// ---------------------------------------------------------------------
(function () {
    let a = 1;

    a = a;
})();

// `no-self-compare` - disallow comparisons where both sides are exactly the same
// ---------------------------------------------------------------------
(function () {
    const a = 1;

    return a === a ? 'foo' : 'bar';
})();

// `no-sequences` - disallow comma operators
// ---------------------------------------------------------------------
(function () {
    const a = 2;

    if (a === 1, a === 2) {
        return false;
    }
})();

// `no-throw-literal` - disallow throwing literals as exceptions
// ---------------------------------------------------------------------
// Bad
(function () {
    throw 'error';
})();
// Good
(function () {
    throw new Error('Some descriptive error');
})();

// `no-unmodified-loop-condition` - disallow unmodified loop conditions
// ---------------------------------------------------------------------
(function () {
    const a = 0;

    while (a) {
        console.log(a);
    }
})();

// `no-unused-expressions` - disallow unused expressions
// ---------------------------------------------------------------------
(function () {
    function f() {}

    f;
})();

// `no-unused-labels` - disallow unused labels
// ---------------------------------------------------------------------
// Labels are not allowed, see: `no-labels`

// `no-useless-call` - disallow unnecessary calls to .call() and .apply()
// ---------------------------------------------------------------------
// Bad
(function () {
    function f() {}

    f.call(undefined);
})();
// Good
(function () {
    function f() {}

    f();
})();

// `no-useless-concat` - disallow unnecessary concatenation of literals or template literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 'a' + 'a';
})();
// Good
(function () {
    const x = 'aa';
})();
// Also good
(function () {
    const x = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
})();

// `no-useless-escape` - disallow unnecessary escape characters
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = '\"a';
})();
// Good
(function () {
    const x = '"a';
})();

// `no-useless-return` - disallow redundant return statements
// ---------------------------------------------------------------------
// Bad
(function () {
    function foo() {
        console.log('foo');

        return;
    }

    foo();
})();
// Good
(function () {
    function foo() {
        console.log('foo');
    }

    foo();
})();

// `no-void` - disallow void operators
// ---------------------------------------------------------------------
(function () {
    void 0;
})();

// `no-warning-comments` - disallow specified warning terms in comments
// ---------------------------------------------------------------------
(function () {
    // TODO
})();

// `no-with` - disallow with statements
// ---------------------------------------------------------------------
// See file ./best-practices-non-strict.js

// `prefer-promise-reject-errors` - require using Error objects as Promise rejection reasons
// ---------------------------------------------------------------------
// Bad
(function () {
    const promise = new Promise((resolve, reject) => reject('error'));
})();
// Good
(function () {
    const promise = new Promise((resolve, reject) => reject(new Error('Some message')));
})();

// `radix` - enforce the consistent use of the radix argument when using parseInt()
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = parseInt('13');
})();
// Good
(function () {
    const x = parseInt('13', 10);
})();

// `require-await` - disallow async functions which have no await expression
// ---------------------------------------------------------------------
// See file ./es8/best-practices.js

// `vars-on-top` - require var declarations be placed at the top of their containing scope
// ---------------------------------------------------------------------
// See file ./es5/best-practices.js

// `wrap-iife` - require parentheses around immediate function invocations
// ---------------------------------------------------------------------
(function () {
    const x = function f() {

    }();
})();

// `yoda` - require or disallow “Yoda” conditions
// ---------------------------------------------------------------------
(function () {
    const a = 'foo';

    if ('Hello' === a) {
        console.log('foo');
    }
})();
