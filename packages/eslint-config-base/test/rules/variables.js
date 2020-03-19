'use strict';

// `no-shadow-restricted-names` - disallow identifiers from shadowing restricted names
// ---------------------------------------------------------------------
// Bad
{
    function undefined() {}
}

// `no-undef` - disallow the use of undeclared variables unless mentioned in /*global */ comments
// ---------------------------------------------------------------------
// Bad
{
    const x = y + 1;
}

// `no-undef-init` - disallow initializing variables to undefined
// ---------------------------------------------------------------------
// Bad
{
    let x = undefined;

    x = 1;
}

// `no-unused-vars` - disallow unused variables
// ---------------------------------------------------------------------
// See file ./variables-no-unused.js

// `no-use-before-define` - disallow the use of variables before they are defined
// ---------------------------------------------------------------------
// Bad (variables)
{
    const bar = a;
    const a = 10;
}
// Good (variables)
{
    const a = 10;
    const bar = a;
}
// Bad (classes)
{
    const f = new Person();

    class Person {}
}
// Good (classes)
{
    class Person {}

    const f = new Person();
}
