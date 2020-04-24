// Made up sample.. not genuine

'use strict';

const fs = require('fs');
const foo = require('foo');
const foobar = require('../../foobar');
const baz = require('../baz');
const bar = require('./bar/baz');
const index = require('./');

fs.readFileSync('/path/to/file');

foo();

foobar();
baz();

bar();

index();
