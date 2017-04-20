'use strict';

function loudException(promise) {
    return promise
    .catch((err) => {
        setImmediate(() => { throw err; });
    });
}

module.exports = loudException;
