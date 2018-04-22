'use strict';

// `no-await-in-loop` - disallow await inside of loops
// ---------------------------------------------------------------------
// Bad
(async function () {
    const userIds = ['afb32432', 'fkldst3r2'];
    const users = [];

    function fetchUser(id) {
        return Promise.resolve({ id });
    }

    for (let x = 0; x < userIds.length; x += 1) {
        users.push(await fetchUser(userIds[x]));
    }

    return users;
})();
// Good
(function () {
    const pmap = require('pmap');

    const userIds = ['afb32432', 'fkldst3r2'];
    // Example uses https://github.com/sindresorhus/p-map

    function fetchUser(id) {
        return Promise.resolve({ id });
    }

    const users = pmap(userIds, (id) => fetchUser(id), { concurrency: 5 });

    return users;
})();
