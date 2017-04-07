// block-scoped-var - enforce the use of variables within the scope they are defined
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() > 0.5) {
        var x = 0;
    }
})();
// Good
(function () {
    var x;

    if (Math.random() > 0.5) {
        x = 0;
    }
})();

// Enforces return statements in callbacks of array's methods
// ---------------------------------------------------------------------
[1, 2, 3].map(function (item) {
    item = item + 1;
});

// Treat var statements as if they were block scoped
// ---------------------------------------------------------------------
(function f() {
    if (Math.random() > 0.5) {
        var a = 1;
    } else {
        a = 2;
    }
})();

// Disallow var and named functions in global scope
// ---------------------------------------------------------------------
function globalFn() {

}

// Disallow declaring the same variable more then once
// ---------------------------------------------------------------------
(function () {
    var a = 1;
    var a = 2;
})();
