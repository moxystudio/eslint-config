'use strict';

// `valid-jsdoc` - enforce valid JSDoc comments
// ---------------------------------------------------------------------
// Bad
(function () {
    /**
     * Add two numbers.
     * @param {number} num The first number.
     * @returns The sum of the two numbers.
     */
    function add(num1, num2) {
        return num1 + num2;
    }
})();
// Good
(function () {
    /**
     * Add two numbers.
     *
     * @param {Number} num1 - The first number.
     * @param {Number} num2 - The second number.
     * @returns {Number} The sum of the two numbers.
     */
    function add(num1, num2) {
        return num1 + num2;
    }
})();
