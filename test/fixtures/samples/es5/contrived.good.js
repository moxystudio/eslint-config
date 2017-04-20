// Made up sample.. not genuine

'use strict';

function Person(name) {
    this._name = name;
}

Person.prototype.getName = function () {
    return this._name;
};

Person.prototype.sayHello = function () {
    console.log('Hello ' + this._name);
};

// -------------------------------------------------

function sumOne(x) {
    x -= 1;
    x += 1;
    x *= 1;
    x /= 1;

    return x + 1;
}

sumOne(1);

// -------------------------------------------------

function printArray(arr) {
    var x;

    for (x = 0; x <= arr.length; x += 1) {
        console.log(x);
    }

    x = 0;
    while (x < arr.length) {
        console.log(x);
        x += 1;
    }

    x = 0;
    do {
        console.log(x);
        x += 1;
    } while (x < arr.length);

    x = 0;
    do {
        console.log(x);
    } while ((x += 1) < arr.length);
}

printArray([]);

// -------------------------------------------------

function printYesOrNo(bool) {
    if (bool) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

printYesOrNo(true);

// -------------------------------------------------

function returnIfElse(x) {
    if (x < 0.5) {
        return x;
    }
    if (x > 0.5) {
        return x;
    }

    return x;
}

returnIfElse(0.1);

// -------------------------------------------------

function returnSwitch(x) {
    var y;

    switch (x) {
    case 0.1:
        return x;
    case 0.2: {
        y = x + 1;

        return y;
    }
    default:
        return x;
    }
}

returnSwitch(0.3);

// -------------------------------------------------

(function iife() {
    console.log('foo');
})();

// -------------------------------------------------

function fnWithManyArgs(x, y,
    z, w) {
    return x + y + z + w;
}

fnWithManyArgs(0.3, 0.2, 0.3, 0.5);

// -------------------------------------------------

function fnThatReturnsBigArray() {
    return [
        1,
        2,
        3,
        4,
    ];
}

fnThatReturnsBigArray();

// -------------------------------------------------

function fnThatReturnsBigObject() {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
}

fnThatReturnsBigObject();

// -------------------------------------------------

function chaining(arr) {
    return arr
    .filter(function () { return true; })
    .map(function (x) { return x + 1; });
}

chaining([]);

// -------------------------------------------------

function useBeforeDefined() {
    useBeforeDefined2();
}

function useBeforeDefined2() {
    console.log('foo');
}

useBeforeDefined();
