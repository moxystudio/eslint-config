'use strict';

// `no-unused-vars` - disallow unused variables
// ---------------------------------------------------------------------
// Bad on object rest
{
    const x = 1;
    const { y } = { y: 1, z: 2 };

    Math.floor(x);
}
// Good on object spread
{
    const x = 1;
    const { y, ...other } = { y: 1, z: 2 };

    Math.floor(x);
    Object.keys(other);
}
// Bad on args spread
(function (x, ...other) {
    Math.floor(x);
})(1, 2, 3);
// Good on args spread
(function (x, ...other) {
    other.forEach((val) => Math.floor(val));
})(1, 2, 3);
