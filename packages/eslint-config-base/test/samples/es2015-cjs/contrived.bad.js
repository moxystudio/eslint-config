// Made up sample.. not genuine

'use strict';

// Test imports with different groups and order
const fs = require('fs');
const index = require('./');
const foobar = require('../../foobar');
const foo = require('foo');
const barbaz = require('./bar/baz');
const baz = require('../baz');
fs.read(foo);

foobar();
baz();
barbaz();
index();
