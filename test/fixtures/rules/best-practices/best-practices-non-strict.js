/* eslint strict:0 */

// `no-octal` - Disallow use of (old style) octal literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const num = 071;
})();
// Good
(function () {
    const num = 0o10; // `es6` octal
})();

// `no-octal-escape` - Disallow use of octal escape sequences in string literals
// ---------------------------------------------------------------------
// Bad
(function () {
    const foo = 'Copyright \251';
})();
// Good
(function () {
    const foo = 'Copyright \u00A9';
    const bar = 'Copyright \xA9';
})();

// `no-with` - disallow with statements
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = { foo: 'bar' };

    with (a) {
        console.log('foo');
    }
})();
