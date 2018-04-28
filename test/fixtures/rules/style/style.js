'use strict';

const React = require('react');

// `array-bracket-spacing` - enforce consistent spacing inside array brackets
// ---------------------------------------------------------------------
// Bad
console.log([ 1, 2, 3 ]);

// Good
console.log([1, 2, 3]);

// `block-spacing` - enforce consistent spacing inside single-line blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    [1, 2]
    .forEach((x) => {console.log(x + 1);});
})();
// Good
(function () {
    [1, 2]
    .forEach((x) => { console.log(x + 1); });
})();

// `brace-style` - enforce consistent brace style for blocks
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0.5)
{
    console.log('foo');
}
// Good
if (Math.random() > 0.5) {
    console.log('foo');
}

// `camelcase` enforce camelcase naming convention
// ---------------------------------------------------------------------
// Bad
(function () {
    const items_count = 1;
})();
// Good
(function () {
    const itemsCount = 1;
})();

// `capitalized-comments` enforce or disallow capitalization of the first letter of a comment
// ---------------------------------------------------------------------
// Bad
console.log('this line must be here');
// my first letter is not capitalized
console.log('this line must be here'); // this is a inline comment

// Good
// My first letter is capitalized
console.log('lowercase can be used in multiple line comment');
// My first letter is capitalized
// continuing the last comment
console.log('lowercase can be used in other contexts');
console.log('this line contains an inline comment'); // This is a inline comment
console.log('...');
// this.props
console.log('words with dots are ok');
// capitalized-comments
console.log('words with dashes are ok');
// capitalized_comments
console.log('words with underscores are ok');
// capitalizedComments
console.log('camelCased words are ok');
// capitalized()
console.log('words with parenthesis are ok');
// `capitalized`
console.log('words inside of backtick quotes');
// "capitalized"
console.log('words inside of double quotes');
// 'capitalized'
console.log('words inside of single quotes');
// const foo = 'bar'
console.log('variable definitions with const are ok');
// let foo = 'bar'
console.log('variable definitions with let is ok');
// var foo = 'bar'
console.log('variable definitions with var is ok');
// import foo from 'foo'
console.log('import statements are ok');
// export { foo }
console.log('export statements are ok');
// class
console.log('class declarations are ok');
// try
console.log('try-catch statements are ok');
// switch
console.log('switch statements are ok');
// case
console.log('switch case is ok');
// break
console.log('switch case break is ok');
// if (foo)
console.log('if clauses are ok');
// else
console.log('else conditions are ok');
// async function foo()
console.log('async is ok');
// await foo()
console.log('await is ok');
// function foo(bar)
console.log('functions are ok');
// return
console.log('return statements are ok');
// do
console.log('do while statements are ok');
// for
console.log('for statements are ok');
// while
console.log('while statements are ok');
// continue
console.log('continue statements are ok');
// delete
console.log('delete operators are ok');
// this
console.log('this keywords are ok');
// super
console.log('super keywords are ok');
// throw
console.log('throw statements are ok');
// typeof
console.log('typeof operators are ok');
// instanceof
console.log('instanceof operators are ok');
// debugger
console.log('debugger statements are ok');
// yield
console.log('yield keywords are ok');
// finally
console.log('finally clauses are ok');

// `comma-dangle` require or disallow trailing commas
// ---------------------------------------------------------------------
// Bad
(function () {
    const foo = {
        bar: 'baz',
        qux: 'quux'
    };
})();
// Good
(function () {
    const foo = {
        bar: 'baz',
        qux: 'quux',
    };
})();

// `comma-spacing` - enforce consistent spacing before and after commas
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = [].concat('hello','stranger');
})();
// Good
(function () {
    const b = [].concat('hello', 'again');
})();

// `comma-style` - enforce consistent comma style
// ---------------------------------------------------------------------
// Bad
(function () {
    const b = {
        first: 1
        ,
        second: 2,
    };
})();
// Good
(function () {
    const b = {
        first: 1,
        second: 2,
    };
})();

// `computed-property-spacing` - enforce consistent spacing inside computed property brackets
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = { foo: 'bar' };
    const prop = 'error';
    const c = obj[ prop];
})();
// Good
(function () {
    const obj = { foo: 'bar' };
    const prop = 'error';
    const c = obj[prop];
})();

// `consistent-this` - enforce consistent naming when capturing the current execution context
// ---------------------------------------------------------------------
// Bad
(function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
        test() {
            const self = this;
        }
    }
})();
// Good
(function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
        test() {
            const that = this;
        }
    }
})();

// `eol-last` - require or disallow newline at the end of files
// ---------------------------------------------------------------------
// Can't test this... editorconfig corrects this

// `func-call-spacing` - require or disallow spacing between function identifiers and their invocations
// ---------------------------------------------------------------------
// Bad
(function () {
    function fn() {}
    fn ();
})();
// Good
(function () {
    function fn() {}
    fn();
})();

// `func-name-matching` - require function names to match the name of the variable or property to which they are assigned
// ---------------------------------------------------------------------
// Not active
(function () {
    function Foo() {}

    Foo.prototype.bar = function foo() {
        console.log('foo');
    };
})();

// `func-names` - require or disallow named function expressions
// ---------------------------------------------------------------------
// Not active
(function () {
    function Foo() {}

    Foo.prototype.bar = function () {
        console.log('foo');
    };
})();

// `func-style` - enforce the consistent use of either function declarations or expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    const fn = function () {}
})();
// Good
(function () {
    function fn() {}
    const fn2 = () => {};
})();

// `id-blacklist` - disallow specified identifiers
// ---------------------------------------------------------------------
// Not active
(function () {
    function callback() {}
})();

// `id-length` - enforce minimum and maximum identifier lengths
// ---------------------------------------------------------------------
// Not active
(function () {
    const veryBigAndBadNameForSingleVariablesHashed = 1;
})();

// `id-match` - require identifiers to match a specified regular expression
// ---------------------------------------------------------------------
// Not active

// `indent` - enforce consistent indentation
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = {
      a: 2,
    };
})();
// Good
(function () {
    const obj = {
        a: 2,
    };
})();
// Good - ignore indent on template literals
(function () {
    const foo = true;
    const bar = `
        Hello,

        ${foo ?
            'André' :
            'Cruz'
        }`;
})();

// `jsx-quotes` - enforce the consistent use of either double or single quotes in JSX attributes
// ---------------------------------------------------------------------
// Bad
(function () {
    const MyComponent = <a b='c'>foo</a>;
})();
// Good
(function () {
    const MyComponent = <a b="c">foo</a>;
})();

// `key-spacing` - enforce consistent spacing between keys and values in object literal properties
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = {
        a:2,
    };
})();
// Good
(function () {
    const obj = {
        a: 2,
    };
})();

// `keyword-spacing` - enforce consistent spacing before and after keywords
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() === 1) {
        console.log('foo');
    }else {
        console.log('bar');
    }
})();
// Good
(function () {
    if (Math.random() === 1) {
        console.log('foo');
    } else {
        console.log('bar');
    }
})();

// `line-comment-position` - enforce position of line comments
// ---------------------------------------------------------------------
// Not active
(function () {
    // Before comment
    const a = 1 + 1;
})(); // Inline comment

// `linebreak-style` - enforce consistent linebreak style
// ---------------------------------------------------------------------
// Can't test..

// `lines-around-comment` - require empty lines around comments
// ---------------------------------------------------------------------
// Not active
(function () {
    const a = 'before';
    /* In between */
    const b = 'after';
})();

// `lines-around-directive` - require or disallow newlines around directives
// ---------------------------------------------------------------------
// Bad
(function () {
    'use asm';
    const foo = 0;
})();
// Good
(function () {
    'use asm';

    const foo = 0;
})();

// `max-depth` - enforce a maximum depth that blocks can be nested
// ---------------------------------------------------------------------
// Disencouraged
if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
                if (Math.random() > 0.5) {
                    if (Math.random() > 0.5) {
                        if (Math.random() > 0.5) {
                            console.log('This is bad');
                        }
                    }
                }
            }
        }
    }
}
// Good
if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
                if (Math.random() > 0.5) {
                    console.log('This is still correct');
                }
            }
        }
    }
}

// `max-len` - enforce a maximum line length
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    const maximumLength = 'We are writting this to check which one is the maximum length of our program. It should be somewhere around here-[ x ]';
})();
// Good
(function () {
    const maximumLength = 'This respects the max length';
})();
// Also good
(function () {
    const maximumLength = `
This is gonna be a really long string but it's okay because it's a template literal and we are ignoring those from the 'max-len' rule, so you can write long paragraphs at will.
Here's another paragraph!
`;
})();

// `max-lines` - enforce a maximum number of lines per file
// ---------------------------------------------------------------------
// See file ./bad-style-lines.js

// `max-nested-callbacks` - enforce a maximum depth that callbacks can be nested
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    function f(cb) {
        cb();
    }

    f(() => {
        f(() => {
            f(() => {
                f(() => {
                    f(() => {
                        f(() => {
                            f(() => {});
                        });
                    });
                });
            });
        });
    });
})();
// Good
// Flatten your code, use promises or async/await

// `max-params` - enforce a maximum number of parameters in function definitions
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    function f(one, two, three, four, five, six, seven) {
        console.log('Too many args');
    }
})();
// Good
(function () {
    function f(one, two, three) {
        console.log('Too many args');
    }
})();

// `max-statements` - enforce a maximum number of statements allowed in function blocks
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    function maxStatements() {
        let a = 1;

        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
    }
})();
// Good
(function () {
    function maxStatements() {
        let a = 1;

        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
        a = 1;
    }
})();

// `max-statements-per-line` - enforce a maximum number of statements allowed per line
// ---------------------------------------------------------------------
// Bad
(function () {
    function f() { if (Math.random() > 0.5) { console.log('this is'); if (Math.random() > 0) { console.log('..confusing'); } } }
})();
// Good
(function () {
    function f() {
        if (Math.random() > 0.5) {
            console.log('here we have');
            if (Math.random() > 0) {
                console.log('...a structure');
            }
        }
    }
})();

// `multiline-ternary` - enforce newlines between operands of ternary expressions
// ---------------------------------------------------------------------
// Not active
(function () {
    const foo = 2;
    const bar = 3;

    const res = foo > bar ? bar :
        foo;
})();

// `new-cap` - require constructor names to begin with a capital letter
// ---------------------------------------------------------------------
// Bad
(function () {
    function person() {}

    const notCapital = new person();
})();
// Good
(function () {
    function Person() {}

    const notCapital = new Person();
})();

// `new-parens` - require parentheses when invoking a constructor with no arguments
// ---------------------------------------------------------------------
// Bad
(function () {
    function Person() {}

    const notCapital = new Person;
})();
// Good
(function () {
    function Person() {}

    const notCapital = new Person();
})();

// `newline-after-var` - require or disallow an empty line after variable declarations
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = 0;
    console.log('Should have given an extra line before');
})();
// Good
(function () {
    const a = 0;

    console.log('An extra line before has been given');
})();

// `newline-before-return` - require an empty line before return statements
// ---------------------------------------------------------------------
// Bad
(function () {
    function f() {
        console.log('foo');
        return true;
    }
})();
// Good
(function () {
    function f() {
        console.log('foo');

        return true;
    }
})();

// `newline-per-chained-call` - require a newline after each call in a method chain
// ---------------------------------------------------------------------
// This must be with arrow functions otherwise it has a conflict with the max statements per line rule
// Bad
[1, 2, 3].filter((x) => x > 0).find((x) => x === 1).toString();
// Good
[1, 2, 3].filter((x) => x > 0).find((x) => x === 1)
.toString();

// `no-array-constructor` - disallow Array constructors
// ---------------------------------------------------------------------
// Bad
(function () {
    const b = Array(0, 1, 2);
})();
// Good
(function () {
    const b = [0, 1, 2];
})();

// `no-bitwise` - disallow bitwise operators
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = undefined;
    const b = 2;
    const c = a | b;
})();
// Good
(function () {
    const a = undefined;
    const b = 2;
    const c = a || b;
})();

// `no-continue` - disallow continue statements
// ---------------------------------------------------------------------
// Not active
(function () {
    for (let x; x < 2; x += 1) {
        if (x >= 1) {
            continue;
        }
    }
})();

// `no-inline-comments` - disallow inline comments after code
// ---------------------------------------------------------------------
// Not active
if (Math.random() > 0.5) { // Comment
    // More comments
}

// `no-lonely-if` - disallow if statements as the only statement in else blocks
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0.5) {
    console.log('foo');
} else {
    if (Math.random() < 0.5) {
        console.log('bar');
    }
}
// Good
if (Math.random() > 0.5) {
    console.log('foo');
} else {
    console.log('bar');
}

// `no-mixed-operators` - disallow mixed binary operators
// ---------------------------------------------------------------------
// Bad
(function () {
    const foo = 1 * 2 + 3;
})();
// Good
(function () {
    const mult = 1 * 2;
    const sum = mult + 3;
})();

// `no-mixed-spaces-and-tabs` - disallow mixed spaces and tabs for indentation
// ---------------------------------------------------------------------
// Cant test this because of editorconfig

// `no-multi-assign` - disallow use of chained assignment expressions
// ---------------------------------------------------------------------
// Not active
(function () {
    let bar = 'foo';
    const foo = bar = 'baz';
})();

// `no-multiple-empty-lines` - disallow multiple empty lines
// ---------------------------------------------------------------------
// Bad



// Good

// `no-negated-condition` - disallow negated conditions
// ---------------------------------------------------------------------
// Not active
(function () {
    const a = true;

    if (!a) {
        console.log('not');
    } else {
        console.log('yes');
    }
})();

// `no-nested-ternary` - disallow nested ternary expressions
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = Math.random() > 0.5 ? true : Math.random() > 0.3 ? false : Math.random() > 0.5 ? 'foo' : 'bar';
})();
// Good
(function () {
    const a = Math.random() > 0.5;

    if (!a) {
        const b = Math.random() > 0.3;

        if (b) {
            const c = Math.random() > 0.5;

            return c ? 'foo' : 'bar';
        }
    }

    return true;
})();

// `no-new-object` - disallow Object constructors
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = new Object();
})();
// Good
(function () {
    class CustomObject {

    }
    const a = new CustomObject();
})();

// `no-plusplus` - disallow the unary operators ++ and --
// ---------------------------------------------------------------------
// Bad
(function () {
    let b = 1;

    b++;
})();
// Good
(function () {
    let b = 1;

    b += 1;
})();

// `no-restricted-syntax` - disallow specified syntax
// ---------------------------------------------------------------------
// Nothing is disallowed

// `no-tabs` - disallow all tabs
// ---------------------------------------------------------------------
// Can't test this. Editor doesn't allow it

// `no-ternary` - disallow ternary operators
// ---------------------------------------------------------------------
// Not active
(function () {
    const b = true;
    const a = Math.random() > 0.5 ? b : false;
})();

// `no-trailing-spaces` - disallow trailing whitespace at the end of lines
// ---------------------------------------------------------------------
// Can't test this one, editor doesn't let me :(

// `no-underscore-dangle` - disallow dangling underscores in identifiers
// ---------------------------------------------------------------------
// Not active
(function () {
    const f = {
        _a() {},
    };

    f._a();
})();

// `no-unneeded-ternary` - disallow ternary operators when simpler alternatives exist
// ---------------------------------------------------------------------
// Bad
(function () {
    const b = 2;
    const a = b ? true : false;
})();
// Good
(function () {
    const b = 2;
    const a = b ? b : 0;
})();

// `no-whitespace-before-property` - disallow whitespace before properties
// ---------------------------------------------------------------------
// Bad
(function () {
    const obj = {};
    const prop = 'foo';
    const value = obj [prop];
})();
// Good
(function () {
    const obj = {};
    const prop = 'foo';
    const value = obj[prop];
})();

// `nonblock-statement-body-position` - enforce the location of single-line statements
// ---------------------------------------------------------------------
// Not active
(function () {
    const foo = true;

    if (foo) // eslint-disable-line curly
        console.log('aqui');
})();

// `object-curly-newline` - nforce consistent line breaks inside braces
// ---------------------------------------------------------------------
// Not active because the first is not allowed with multiline:true and minProperties: 0
(function () {
    const a = {
        a: 1,
    };

    const b = { a: 1, b: 2, c: 3 };

    const c = {
        a: 1,
        b: 2,
        c: 3,
    };
})();

// `object-curly-spacing` - enforce consistent spacing inside braces
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = {a: 2};
})();
// Good
(function () {
    const a = { a: 2 };
})();

// `object-property-newline` - enforce placing object properties on separate lines
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = {
        a: 2, b: 3,
        c: 4,
    };
})();
// Good
(function () {
    const a = { a: 2, b: 3, c: 4 };
})();
// Also good
(function () {
    const a = {
        a: 2,
        b: 3,
        c: 4,
    };
})();

// `one-var` - enforce variables to be declared either together or separately in functions
// ---------------------------------------------------------------------
// Bad
(function () {
    function f() {
        const a = 3;
        const b = 4;
        const c = 1,
            d = 2;
    }
})();
// Good
(function () {
    function f() {
        const a = 3;
        const b = 4;
        const c = 1;
        const d = 2;
    }
})();

// `one-var-declaration-per-line` - require or disallow newlines around variable declarations
// ---------------------------------------------------------------------
// Not allowed to set multiple variables with just one `var`, see rule above

// `operator-assignment` require or disallow assignment operator shorthand where possible
// ---------------------------------------------------------------------
// Not active
(function () {
    let x = 0;

    x += 1;
    x = x + 1;
})();

// `operator-linebreak` - enforce consistent linebreak style for operators
// ---------------------------------------------------------------------
// Bad
(function () {
    const b = 1
            + 2;
})();
// Good
(function () {
    const a = 1 +
              2;
})();

// `padded-blocks` - require or disallow padding within blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    if (Math.random() > 0.5) {

        console.log('foo');

    }
})();
// Good
(function () {
    if (Math.random() > 0.5) {
        console.log('foo');
    }
})();

// `quote-props` - require quotes around object literal property names
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = {
        aa: 2,
        'bb': 0,
    };
})();
// Good
(function () {
    const a = {
        aa: 2,
        bb: 0,
    };
})();

// `quotes` - enforce the consistent use of either backticks, double, or single quotes
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = 'aa';
    const b = "bb";
})();
// Good
(function () {
    const a = 'aa';
    const b = 'bb';
})();

// `require-jsdoc` - require JSDoc comments
// ---------------------------------------------------------------------
// Not active

// `semi` - require or disallow semicolons instead of ASI
// ---------------------------------------------------------------------
// Bad
(function () {
    const name = 'foo'
})();
// Good
(function () {
    const name = 'foo';
})();

// `semi-spacing` - enforce consistent spacing before and after semicolons
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1 ;
})();
// Good
(function () {
    const x = 1;
})();

// `sort-keys` - require object keys to be sorted
// ---------------------------------------------------------------------
// Not active
(function () {
    const obj = {
        a: 1,
        c: 2,
        b: 3,
    };
})();

// `sort-vars` - require variables within the same declaration block to be sorted
// ---------------------------------------------------------------------
(function () {
    const z = 1;
    const a = 1;
})();

// `space-before-blocks` - enforce consistent spacing before blocks
// ---------------------------------------------------------------------
// Bad
(function () {
    function f(){
        console.log('foo');
    }
})();
// Good
(function () {
    function f() {
        console.log('foo');
    }
})();

// `space-before-function-paren` - enforce consistent spacing before function definition opening parenthesis
// ---------------------------------------------------------------------
// Bad
(function () {
    function f () {

    }
})();
// Good
(function () {
    function f() {

    }
})();

// `space-in-parens` - enforce consistent spacing inside parentheses
// ---------------------------------------------------------------------
// Bad
(function () {
    function f( ) {

    }
})();
// Good
(function () {
    function f() {

    }
})();

// `space-infix-ops` - require spacing around infix operators
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = 1+1;
})();
// Good
(function () {
    const a = 1 + 1;
})();

// `space-unary-ops` - enforce consistent spacing before or after unary operators
// ---------------------------------------------------------------------
// Bad
console.log(typeof!console);
// Good
console.log(typeof !console);

// `spaced-comment` - enforce consistent spacing after the // or /* in a comment
// ---------------------------------------------------------------------
// Bad
//This is not right
/*Neither is this*/

// Good
// This is right
/* This too */

// `template-tag-spacing` - require or disallow spacing between template tags and their literals
// ---------------------------------------------------------------------
// Bad
(function () {
    function func() {}
    const hello = func `Hello world`;
})();
// Good
(function () {
    function func() {}
    const hello = func`Hello world`;
})();

// `unicode-bom` - require or disallow Unicode byte order mark (BOM)
// ---------------------------------------------------------------------
// Can't test this

// `wrap-regex` - require parenthesis around regex literals
// ---------------------------------------------------------------------
// Not active
(function () {
    function f() {
        return /aaa/.a();
    }
})();
