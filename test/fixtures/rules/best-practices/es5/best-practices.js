'use strict';

// `block-scoped-var` - enforce the use of variables within the scope they are defined
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() > 0.5) {
        var x = 0; // eslint-disable-line vars-on-top
    }

    console.log(x);
})();
// Good
(function () {
    var x;

    if (Math.random() > 0.5) {
        x = 0;
    }
})();

// `no-redeclare` - disallow variable redeclaration
// ---------------------------------------------------------------------
// Bad
(function () {
    var a = 1;
    var a = 2;
})();
// Good
(function () {
    var a = 1;

    a = 2;
})();

// `vars-on-top` - require var declarations be placed at the top of their containing scope
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() > 0.5) {
        var x = 0;
    }

    console.log(x); // eslint-disable-line block-scoped-var
})();
// Good
(function () {
    var x;

    if (Math.random() > 0.5) {
        x = 0;
    }
})();
