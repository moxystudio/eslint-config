'use strict';

// Made up sample.. not genuine

const myObject = { foo: 'bar', foz: 'baz' };

const { foo, ...other } = myObject;

console.log('foo', foo);
console.log('other properties', other);
