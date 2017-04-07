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
