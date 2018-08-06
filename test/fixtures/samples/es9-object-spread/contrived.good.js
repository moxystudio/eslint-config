// Made up sample.. not genuine

'use strict';

const myObject = { foo: 'bar', foz: 'baz' };

const { foo, ...other } = myObject;

console.log('foo', foo);
console.log('other properties', other);

// -------------------------------------------------

const a = { ...foo };

Object.assign(a, { d: 2 });
