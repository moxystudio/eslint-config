// `no-await-in-loop` - disallow await inside of loops
// ---------------------------------------------------------------------
(async function foo(things) {
    function bar() {}
    const results = [];

    for (const thing of things) {
        // Bad: each loop iteration is delayed until the entire asynchronous operation completes
        results.push(await bar(thing));
    }

    return true;
})();
