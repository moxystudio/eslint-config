'use strict';

// no-return-await - disallow unnecessary return await
// ---------------------------------------------------------------------
// Bad
(function () {
    async function foo() {
        return await Promise.resolve();
    }
})();
// Good
(function () {
    async function foo() {
        await Promise.resolve();
    }
})();

// `require-await` - disallow async functions which have no await expression
// ---------------------------------------------------------------------
// Bad
(function () {
    async function foo() {
        console.log('foo');
    }
})();
// Good
(function () {
    async function foo() {
        await Promise.resolve();
    }
})();
