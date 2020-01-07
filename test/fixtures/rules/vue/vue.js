// `vue/html-quotes` - enforce double quotes
// ---------------------------------------------------------------------
// Bad
(function() {
    console.log('this is bad in vue');
})();
// Good
(function() {
    console.log("this is good in vue");
})();
