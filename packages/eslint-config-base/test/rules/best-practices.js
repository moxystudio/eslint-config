'use strict';

// `array-callback-return` - enforce return statements in callbacks of array methods
// ---------------------------------------------------------------------
// Bad
[1, 2, 3].map((item) => {
    item = item + 1;
});
// Good
[1, 2, 3].map((item) => item + 1);

// `curly` - enforce consistent brace style for all control statements
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    if (Math.random() > 0.5)
        foo = 'foo';
    // Good
    if (Math.random() > 0.5) {
        foo = 'bar';
    }
}

// `default-case` - require default cases in switch statements
// ---------------------------------------------------------------------
// Bad
{
    const x = 1;
    let foo;

    switch (x) {
    case 1:
        foo = 'foo';
        break;
    }
}
// Good
{
    const x = 1;
    let foo;

    switch (x) {
    case 1:
        foo = 'foo';
        break;
    default:
    }
}

// `dot-location` - enforce consistent newlines before and after dots
// ---------------------------------------------------------------------
// Bad
{
    const obj = {};
    const a = obj.
        a;
}
// Good
{
    const obj = {};
    const a = obj.a;
    const b = obj
        .a;
}

// `dot-notation` - enforce dot notation whenever possible
// ---------------------------------------------------------------------
// Bad
{
    const obj = {};
    const a = obj['a'];
}
// Good
{
    const obj = {};
    const a = obj.a;
}

// `eqeqeq` - require the use of === and !==
// ---------------------------------------------------------------------
// Bad
{
    const x = Math.random();

    if (x == 0.5 || x != 0.3) {
        const foo = 'foo';
    }
}
// Good
{
    const x = Math.random();

    if (x === 0.5 || x !== 0.3) {
        const foo = 'foo';
    }
    if (x != null) {
        const foo = 'foo';
    }
}

// `no-caller` - disallow the use of arguments.caller or arguments.callee
// ---------------------------------------------------------------------
// Bad
{
    function foo(n) {
        if (n <= 0) {
            return;
        }

        arguments.callee(n - 1);
    }
}

// `no-case-declarations` - disallow lexical declarations in case clauses
// ---------------------------------------------------------------------
// Bad
{
    const x = 1;

    switch (x) {
    case 1:
        const y = 0;

        break;
    default:
    }
}
// Good
{
    const x = 1;

    switch (x) {
    case 1: {
        const y = 0;

        break;
    }
    default:
    }
}

// `no-else-return` - disallow else blocks after return statements in if statements
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {
        if (Math.random() > 0.5) {
            return false;
        } else {
            return true;
        }
    };
}
// Good
{
    const foo = () => {
        if (Math.random() > 0.5) {
            return false;
        }

        return true;
    };
}

// `no-empty-pattern` - disallow empty destructuring patterns
// ---------------------------------------------------------------------
// Bad
{
    const foo = [1, 2, 3];
    const [] = foo;
}
// Good
{
    const foo = [1, 2, 3];
    const [first] = foo;
}

// `no-eval` - disallow the use of eval()
// ---------------------------------------------------------------------
// Bad
eval('let a = 0');

// `no-extend-native` - disallow extending native types
// ---------------------------------------------------------------------
// Bad
Object.prototype.a = 'a';

// `no-extra-bind` - disallow unnecessary calls to .bind()
// ---------------------------------------------------------------------
// Bad
{
    const x = function () {
        const foo = 'foo';
    }.bind({});
}

// `no-fallthrough` - disallow fallthrough of case statements
// ---------------------------------------------------------------------
// Bad
{
    const x = 1;
    let y = 3;

    switch (x) {
    case 1:
        y = 'foo';
    default:
        y = 'bar';
        break;
    }
}
// Good
{
    const x = 1;
    let y = 3;

    switch (x) {
    case 1:
        y = 'foo';
        // fallsthrough
    case 2:
        y = 'bar';
        // falls through
    default:
        y = 'foobar';
        break;
    }
}

// `no-floating-decimal` - disallow leading or trailing decimal points in numeric literals
// ---------------------------------------------------------------------
// Bad
{
    const x = .5;
}
// Good
{
    const x = 0.5;
}

// `no-global-assign` - disallow assignments to native objects or read-only global variables
// ---------------------------------------------------------------------
// Bad
Object = 'a';

// `no-implicit-globals` - disallow variable and function declarations in the global scope
// ---------------------------------------------------------------------
// Bad
function globalFn() {}
// Good
{
    function localFn() {}
}

// `no-implied-eval` - disallow the use of eval()-like methods
// ---------------------------------------------------------------------
// Bad
setTimeout('console.log(\'Hello!\');', 1000);
// Good
setTimeout(() => 'foo', 1000);

// `no-invalid-this` - disallow this keywords outside of classes or class-like objects
// ---------------------------------------------------------------------
// Bad
{
    function foo() {
        this.a = 'bar';
    }

    foo();
}

// `no-iterator` - disallow the use of the __iterator__ property
// ---------------------------------------------------------------------
// Bad
{
    const a = {};

    a.__iterator__ = function () {};
}

// `no-labels` - disallow labeled statements
// ---------------------------------------------------------------------
// Bad
(() => {
    A: if (Math.random() > 0.5) {
        break A;
    }
})();

// `no-lone-blocks` - disallow unnecessary nested blocks
// ---------------------------------------------------------------------
// Bad
{
    {
        const foo = 'foo';
    }
}
// Good
{
    const foo = 'foo';
}

// `no-loop-func` - disallow function declarations and expressions inside loop statements
// ---------------------------------------------------------------------
// Bad
{
    const funcs = [];
    let x;

    for (x; x < 2; x += 1) {
        funcs[x] = () => {
            const foo = x;
        };
    }
}

// `no-multi-spaces` - disallow multiple spaces
// ---------------------------------------------------------------------
// Bad
{
    const x =  0;
}
// Also bad
{
    const x = 0;  // Some comment
}
// Good
{
    const x = 0;
}

// `no-new` - disallow new operators outside of assignments or comparisons
// ---------------------------------------------------------------------
// Bad
{
    class Person {}

    new Person();
}

// `no-new-func` - disallow new operators with the Function object
// ---------------------------------------------------------------------
// Bad
{
    const f = new Function();
}
// Good
{
    const f = () => {};
}

// `no-new-wrappers` - disallow new operators with the String, Number, and Boolean objects
// ---------------------------------------------------------------------
// Bad
{
    const x = new String();
}
// Good
{
    const x = '';
}

// `no-proto` - disallow the use of the __proto__ property
// ---------------------------------------------------------------------
// Bad
{
    const a = {}.__proto__;
}

// `no-restricted-properties` - disallow certain properties on certain objects
// ---------------------------------------------------------------------
// Bad
{
    const a = {};

    a.__defineGetter__('foo', () => {});
    a.__defineSetter__('foo', () => {});
}
// Good
{
    const a = {};

    Object.defineProperty(a, 'foo', {
        get: () => {},
        set: () => {},
    });
}

// `no-alert` - disallow the use of `alert`, `confirm`, and `prompt`
// ---------------------------------------------------------------------
// Bad
alert('foo');
confirm('foo?');
prompt('foo', 'bar');

// `no-return-assign` - disallow assignment operators in return statements
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {
        let a;

        return a = 1;
    };
}
// Good
{
    const foo = () => {
        let a;

        return (a = 1);
    };
}
// Also good
{
    const foo = () => {
        let a = null;

        a = 1;

        return a;
    };
}

// `no-return-await` - disallow unnecessary return await
// ---------------------------------------------------------------------
// Bad
{
    const foo = async () => await Promise.resolve();
}
// Good
{
    const foo = async () => {
        await Promise.resolve();
    };
}

// `no-script-url` - disallow javascript: urls
// ---------------------------------------------------------------------
// Bad
{
    const href = 'javascript:void(0)';
}

// `no-self-assign` - disallow assignments where both sides are exactly the same
// ---------------------------------------------------------------------
// Bad
{
    let a = 1;

    a = a;
}

// `no-self-compare` - disallow comparisons where both sides are exactly the same
// ---------------------------------------------------------------------
// Bad
{
    const a = 1;

    if (a === a) {
        // Do something
    }
}

// `no-sequences` - disallow comma operators
// ---------------------------------------------------------------------
// Bad
{
    const a = 2;

    if (a === 1, a === 2) {
        // Do something
    }
}

// `no-throw-literal` - disallow throwing literals as exceptions
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {
        throw 'error';
    };
}
// Good
{
    const foo = () => {
        throw new Error('Some descriptive error');
    };
}

// `no-unmodified-loop-condition` - disallow unmodified loop conditions
// ---------------------------------------------------------------------
// Bad
{
    const a = 0;
    let x;

    while (a) {
        x = 'foo';
    }
}

// `no-unused-expressions` - disallow unused expressions
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {};

    foo;
}

// `no-useless-call` - disallow unnecessary calls to .call() and .apply()
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {};

    foo.call(undefined, 1);
    foo.apply(undefined, [1]);
}
// Good
{
    const foo = () => {};

    foo(1);
}

// `no-useless-catch` - disallow unnecessary `catch` clauses
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {};

    try {
        foo();
    } catch (e) {
        throw e;
    }
}
// Good
{
    const foo = () => {};

    try {
        foo();
    } catch (e) {
        console.error(e);
        throw e;
    }
}

// `no-useless-concat` - disallow unnecessary concatenation of literals or template literals
// ---------------------------------------------------------------------
// Bad
{
    const x = 'a' + 'a';
}
// Good
{
    const x = 'aa';
}
// Also good
{
    const x = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
}

// `no-useless-escape` - disallow unnecessary escape characters
// ---------------------------------------------------------------------
// Bad
{
    const x = '\"a';
}
// Good
{
    const x = '"a';
}

// `no-useless-return` - disallow redundant return statements
// ---------------------------------------------------------------------
// Bad
{
    const foo = () => {
        const bar = 'bar';

        return;
    };

    foo();
}
// Good
{
    const foo = () => {
        const bar = 'bar';
    };

    foo();
}

// `no-void` - disallow void operators
// ---------------------------------------------------------------------
// Bad
{
    void 0;
}

// `no-warning-comments` - disallow specified warning terms in comments
// ---------------------------------------------------------------------
// Not advisable
// TODO

// `prefer-promise-reject-errors` - require using Error objects as Promise rejection reasons
// ---------------------------------------------------------------------
// Bad
{
    const promise = new Promise((resolve, reject) => reject('error'));
}
// Good
{
    const promise = new Promise((resolve, reject) => reject(new Error('Some message')));
}

// `radix` - enforce the consistent use of the radix argument when using parseInt()
// ---------------------------------------------------------------------
// Bad
{
    const x = parseInt('13');
}
// Good
{
    const x = parseInt('13', 10);
}

// `wrap-iife` - require parentheses around immediate function invocations
// ---------------------------------------------------------------------
// Bad
{
    const x = function () {
        return 1;
    }();
}
// Good
{
    const x = (function () {
        return 1;
    })();
}
// Also good
{
    const x = (() => 1)();
}

// `yoda` - require or disallow “Yoda” conditions
// ---------------------------------------------------------------------
// Bad
{
    const a = 'foo';
    let foo;

    if ('Hello' === a) {
        foo = 'foo';
    }
}
// Good
{
    const a = 'foo';
    let foo;

    if (a === 'Hello') {
        foo = 'foo';
    }
}
