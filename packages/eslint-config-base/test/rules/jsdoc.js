'use strict';

// Bad
{
    /**
     * Add two numbers.
     * @param {Number} num The first number.
     * @returns The sum of the two numbers.
     */
    const add = (num1, num2) => num1 + num2;
}
// Good
{
    /**
     * Add two numbers.
     *
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of the two numbers.
     */
    const add = (num1, num2) => num1 + num2;
}
