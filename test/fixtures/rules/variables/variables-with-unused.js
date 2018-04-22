'use strict';

// `no-unused-vars` - disallow unused variables
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1;
    const y = 2;

    console.log(x);
})();
// Good
(function () {
    const x = 1;
    const { y, ...other } = { y: 1, z: 2 };

    console.log(x);
    console.log(other);
})();
