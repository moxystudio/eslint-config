'use strict';

const fs = require('fs');

// `handle-callback-err` - require error handling in callbacks
// ---------------------------------------------------------------------
// Not advisable
{
    const callback = (err, value) => {
        console.log(value);
    };
}
// Good
{
    const callback = (err, value) => {
        if (err) {
            console.log('error', err);

            return;
        }

        console.log(value);
    };
}
// Also good
{
    const otherCallback = () => {};
    const callback = (err, value) => otherCallback(err, value);
}

// `no-new-require` - disallow new operators with calls to require
// ---------------------------------------------------------------------
// This is not allowed because `new-cap` disallows `new require('some-module')``
