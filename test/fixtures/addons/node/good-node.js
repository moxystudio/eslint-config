'use strict';

var fs = require('fs');

process.stdout.write(fs.readFileSync('./foo'));
