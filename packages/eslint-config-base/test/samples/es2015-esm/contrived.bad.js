// Made up sample.. not genuine
// Test unnecessary `use strict`

'use strict';

// Test imports with different groups and order
import fs from 'fs';
import index from './';
import foobar from '../../foobar';
import foo from 'foo';
import barbaz from './bar/baz';
import baz from '../baz';
fs.read(foo);

foobar();
baz();
barbaz();

// Test warning when using require

const bar = require('foo/bar');

// Test imports in body of module
import biz from '../biz';

bar();
