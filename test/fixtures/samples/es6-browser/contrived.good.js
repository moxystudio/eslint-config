// Made up sample.. not genuine

'use strict';

class Person {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    sayHello() {
        console.log(`Hello ${this._name}`);
    }
}

const person = new Person('André');

person.getName();

// -------------------------------------------------

function sumOne(x = 1) {
    x -= 1;
    x += 1;
    x *= 1;
    x /= 1;

    return x + 1;
}

sumOne(1);

// -------------------------------------------------

function printArray(arr) {
    for (let x = 0; x <= arr.length; x += 1) {
        console.log(x);
    }

    let y;

    while (y < arr.length) {
        console.log(y);
        y += 1;
    }

    y = 0;
    do {
        console.log(y);
        y += 1;
    } while (y < arr.length);

    y = 0;
    do {
        console.log(y);
    } while ((y += 1) < arr.length);
}

printArray([]);

// -------------------------------------------------

function returnSwitch(x) {
    switch (x) {
    case 0.1:
        return x;
    case 0.2: {
        const y = x + 1;

        return y;
    }
    default:
        return x;
    }
}

returnSwitch(0.3);

// -------------------------------------------------

function chaining(arr) {
    return arr
    .filter(() => true)
    .map((x) => x + 1);
}

chaining([]);

// -------------------------------------------------

function fnWithRestParams(...arr) {
    return arr
    .filter(() => true)
    .map((x) => x + 1);
}

fnWithRestParams(1, 2);

// -------------------------------------------------

function fnWithDefaultArgs(x = 1) {
    return x + 1;
}

fnWithDefaultArgs();

// -------------------------------------------------

function fnThatUsesSpread() {
    const [first, ...other] = [1, 2, 3];

    console.log(first, other);
}

fnThatUsesSpread();

// -------------------------------------------------

function fnThatUsesEnhancedObjectProperties(x) {
    return {
        [`prop-${x}`]: true,
        x,
    };
}

fnThatUsesEnhancedObjectProperties();
