'use strict';

// Disallow this keywords outside of classes or class-like objects
// ---------------------------------------------------------------------
(function () {
    function f() {
        this.a = 'bar';
    }

    f();
})();
