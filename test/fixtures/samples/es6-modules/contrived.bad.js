// Made up sample.. not genuine

// Test unnecessary `use strict`

'use strict';

// Test warning when using require

import os from 'os'; // Builtin
import external2 from 'external2';
import external1 from 'external1';
import sibling from './sibling';
import parent from '../parent';
import external3 from 'external3';
import crypto from 'crypto'; // Builtin

console.log(sibling);

import sibling3 from './sibling3'; // Builtin

const sibling2 = require('./sibling2');
