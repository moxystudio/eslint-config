// Move to browser
// `no-restricted-globals` - disallow specified global variables
// ---------------------------------------------------------------------
// The only restricted global is `event` in the browser because it's easy to make mistakes.. see below
// Bad
(function () {
    function handleClick() {
        console.log(event);
    }
})();
// Good
(function () {
    function handleClick(event) {
        console.log(event);
    }
})();
// Also good
(function () {
    function handleClick(e) {
        console.log(e);
    }
})();
