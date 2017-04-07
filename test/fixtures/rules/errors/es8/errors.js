// `no-await-in-loop` - disallow await inside of loops
// ---------------------------------------------------------------------
// Bad
(async function fetchUsers(ids) {
    const userIds = ['afb32432', 'fkldst3r2'];
    const users = [];

    for (let x = 0; x < userIds.length; x += 1) {
        users.push(await fetchUser(userIds[x]));  // eslint-disable-line no-undef
    }

    return users;
})();
// Good
(function fetchUsers(ids) {
    const userIds = ['afb32432', 'fkldst3r2'];
    // Example uses https://github.com/sindresorhus/p-map
    const users = pmap(userIds, (id) => fetchUser(id), { concurrency: 5 });  // eslint-disable-line no-undef

    return users;
})();
