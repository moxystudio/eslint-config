'use strict';

// `array-bracket-spacing` - enforce consistent spacing inside array brackets
// ---------------------------------------------------------------------
// Bad
{
    const foo = [ 1, 2, 3 ];
}
// Good
{
    const foo = [1, 2, 3];
}

// `block-spacing` - enforce consistent spacing inside single-line blocks
// ---------------------------------------------------------------------
// Bad
[1, 2]
    .forEach((x) => {console.log(x);});
// Good
[1, 2]
    .forEach((x) => { console.log(x); });

// `brace-style` - enforce consistent brace style for blocks
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0.5)
{
    // Do something
}
// Good
if (Math.random() > 0.5) {
    // Do something
}

// `camelcase` enforce camelcase naming convention
// ---------------------------------------------------------------------
// Bad
{
    const items_count = 1;
}
// Good
{
    const itemsCount = 1;
}

// `capitalized-comments` enforce or disallow capitalization of the first letter of a comment
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    foo = 'this line must be here';
    // my first letter is not capitalized
    foo = 'this line must be here'; // this is a inline comment
}
// Good
{
    let foo;

    // My first letter is capitalized
    foo = 'lowercase can be used in multiple line comment';
    // My first letter is capitalized
    // continuing the last comment
    foo = 'lowercase can be used in other contexts';
    foo = 'this line contains an inline comment'; // This is a inline comment
    foo = '...';
    // this.props
    foo = 'words with dots are ok';
    // capitalized-comments
    foo = 'words with dashes are ok';
    // capitalized_comments
    foo = 'words with underscores are ok';
    // capitalizedComments
    foo = 'camelCased words are ok';
    // capitalized()
    foo = 'words with parenthesis are ok';
    // `capitalized`
    foo = 'words inside of backtick quotes';
    // "capitalized"
    foo = 'words inside of double quotes';
    // 'capitalized'
    foo = 'words inside of single quotes';
    // const foo = 'bar'
    foo = 'variable definitions with const are ok';
    // let foo = 'bar'
    foo = 'variable definitions with let is ok';
    // import foo from 'foo'
    foo = 'import statements are ok';
    // export { foo }
    foo = 'export statements are ok';
    // class
    foo = 'class declarations are ok';
    // try
    foo = 'try-catch statements are ok';
    // switch
    foo = 'switch statements are ok';
    // case
    foo = 'switch case is ok';
    // break
    foo = 'switch case break is ok';
    // if (foo)
    foo = 'if clauses are ok';
    // else
    foo = 'else conditions are ok';
    // async function foo()
    foo = 'async is ok';
    // await foo()
    foo = 'await is ok';
    // function foo(bar)
    foo = 'functions are ok';
    // return
    foo = 'return statements are ok';
    // do
    foo = 'do while statements are ok';
    // for
    foo = 'for statements are ok';
    // while
    foo = 'while statements are ok';
    // continue
    foo = 'continue statements are ok';
    // delete
    foo = 'delete operators are ok';
    // this
    foo = 'this keywords are ok';
    // super
    foo = 'super keywords are ok';
    // throw
    foo = 'throw statements are ok';
    // typeof
    foo = 'typeof operators are ok';
    // instanceof
    foo = 'instanceof operators are ok';
    // debugger
    foo = 'debugger statements are ok';
    // yield
    foo = 'yield keywords are ok';
    // finally
    foo = 'finally clauses are ok';
}

// `comma-dangle` require or disallow trailing commas
// ---------------------------------------------------------------------
// Bad
{
    const foo = {
        bar: 'baz',
        qux: 'quux'
    };
}
// Good
{
    const foo = {
        bar: 'baz',
        qux: 'quux',
    };
}

// `comma-spacing` - enforce consistent spacing before and after commas
// ---------------------------------------------------------------------
// Bad
{
    const a = [].concat('hello','stranger');
}
// Good
{
    const b = [].concat('hello', 'again');
}

// `comma-style` - enforce consistent comma style
// ---------------------------------------------------------------------
// Bad
{
    const b = {
        first: 1
        ,
        second: 2,
    };
}
// Good
{
    const b = {
        first: 1,
        second: 2,
    };
}

// `computed-property-spacing` - enforce consistent spacing inside computed property brackets
// ---------------------------------------------------------------------
// Bad
{
    const obj = { foo: 'bar' };
    const prop = 'error';
    const c = obj[ prop];
}
// Good
{
    const obj = { foo: 'bar' };
    const prop = 'error';
    const c = obj[prop];
}

// `consistent-this` - enforce consistent naming when capturing the current execution context
// ---------------------------------------------------------------------
// Bad
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        test() {
            const self = this;
        }
    }
}
// Good
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        test() {
            const that = this;
        }
    }
}

// `eol-last` - require or disallow newline at the end of files
// ---------------------------------------------------------------------
// Can't test this... editorconfig corrects this

// `func-call-spacing` - require or disallow spacing between function identifiers and their invocations
// ---------------------------------------------------------------------
// Bad
{
    const fn = () => {};

    fn ();
}
// Good
{
    const fn = () => {};

    fn();
}

// `func-style` - enforce the consistent use of either function declarations or expressions
// ---------------------------------------------------------------------
// Bad
{
    const fn = function () {}
}
// Good
{
    const x = () => {
        function fn() {}
    };
    const fn2 = () => {};
}

// `indent` - enforce consistent indentation
// ---------------------------------------------------------------------
// Bad
{
    const obj = {
      a: 2,
    };
}
// Good
{
    const obj = {
        a: 2,
    };
}
// Good - ignore indent on template literals
{
    const foo = true;
    const bar = `
        Hello,

        ${foo ?
            'André' :
            'Cruz'
        }`;
}

// `jsx-quotes` - enforce the consistent use of either double or single quotes in JSX attributes
// ---------------------------------------------------------------------
// Bad
{
    const MyComponent = <a b='c'>foo</a>;
}
// Good
{
    const MyComponent = <a b="c">foo</a>;
}

// `key-spacing` - enforce consistent spacing between keys and values in object literal properties
// ---------------------------------------------------------------------
// Bad
{
    const obj = {
        a:2,
    };
}
// Good
{
    const obj = {
        a: 2,
    };
}

// `keyword-spacing` - enforce consistent spacing before and after keywords
// ---------------------------------------------------------------------
// Bad
if (Math.random() === 1) {
    // Do something
}else {
    // Do something else
}
// Good
if (Math.random() === 1) {
    // Do something
} else {
    // Do something else
}

// `linebreak-style` - enforce consistent linebreak style
// ---------------------------------------------------------------------
// Can't test..

// `lines-around-directive` - require or disallow newlines around directives
// ---------------------------------------------------------------------
// Bad
(() => {
    'use asm';
    const foo = 0;
})();
// Good
(() => {
    'use asm';

    const foo = 0;
})();

// `max-depth` - enforce a maximum depth that blocks can be nested
// ---------------------------------------------------------------------
// Not advisable
if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
                if (Math.random() > 0.5) {
                    if (Math.random() > 0.5) {
                        if (Math.random() > 0.5) {
                            // Do something
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
                    // Do something
                }
            }
        }
    }
}

// `max-len` - enforce a maximum line length
// ---------------------------------------------------------------------
// Not advisable
{
    const maximumLength = 'We are writting this to check which one is the maximum length of our program. It should be somewhere around here-[ x ]';
}
// Good
{
    const maximumLength = 'This respects the max length';
}
// Also good
{
    const maximumLength = `
This is gonna be a really long string but it's okay because it's a template literal and we are ignoring those from the 'max-len' rule, so you can write long paragraphs at will.
Here's another paragraph!
`;
}

// `max-lines` - enforce a maximum number of lines per file
// ---------------------------------------------------------------------
// See file ./style-lines.js

// `max-nested-callbacks` - enforce a maximum depth that callbacks can be nested
// ---------------------------------------------------------------------
// Not advisable
{
    const f = (cb) => {
        cb();
    };

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
}
// Good
// Flatten your code, use promises or async/await

// `max-params` - enforce a maximum number of parameters in function definitions
// ---------------------------------------------------------------------
// Not advisable
{
    const foo = (one, two, three, four, five, six, seven) => {
        // Do something
    };
}
// Good
{
    const foo = (one, two, three) => {
        // Do something
    };
}

// `max-statements` - enforce a maximum number of statements allowed in function blocks
// ---------------------------------------------------------------------
// Not advisable
{
    const foo = () => {
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
    };
}
// Good
{
    const foo = () => {
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
    };
}

// `max-statements-per-line` - enforce a maximum number of statements allowed per line
// ---------------------------------------------------------------------
// Bad
{
    let foo;

    if (Math.random() > 0.5) { foo = 'this is'; if (Math.random() > 0) { foo = '..confusing'; } }
}
// Good
{
    let foo;

    if (Math.random() > 0.5) {
        foo = 'here we have';
        if (Math.random() > 0) {
            foo = '...a structure';
        }
    }
}

// `new-cap` - require constructor names to begin with a capital letter
// ---------------------------------------------------------------------
// Bad
{
    class person {}

    const notCapital = new person();
}
// Good
{
    class Person {}

    const notCapital = new Person();
}

// `new-parens` - require parentheses when invoking a constructor with no arguments
// ---------------------------------------------------------------------
// Bad
{
    class Person {}

    const notCapital = new Person;
}
// Good
{
    class Person {}

    const notCapital = new Person();
}

// `no-array-constructor` - disallow Array constructors
// ---------------------------------------------------------------------
// Bad
{
    const b = Array(0, 1, 2);
}
// Good
{
    const b = [0, 1, 2];
}

// `no-bitwise` - disallow bitwise operators
// ---------------------------------------------------------------------
// Bad
{
    const a = undefined;
    const b = 2;
    const c = a | b;
}
// Good
{
    const a = undefined;
    const b = 2;
    const c = a || b;
}

// `no-lonely-if` - disallow if statements as the only statement in else blocks
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0.5) {
    console.log('> 0.5');
} else {
    if (Math.random() < 0.5) {
        console.log('< 0.5');
    }
}
// Good
if (Math.random() > 0.5) {
    console.log('> 0.5');
} else if (Math.random() < 0.5) {
    console.log('< 0.5');
}

// `no-mixed-operators` - disallow mixed binary operators
// ---------------------------------------------------------------------
// Bad
{
    const foo = 1 * 2 + 3;
}
// Good
{
    const mult = 1 * 2;
    const sum = mult + 3;
}

// `no-mixed-spaces-and-tabs` - disallow mixed spaces and tabs for indentation
// ---------------------------------------------------------------------
// Cant test this because of editorconfig

// `no-multiple-empty-lines` - disallow multiple empty lines
// ---------------------------------------------------------------------
// Bad



// Good

// `no-nested-ternary` - disallow nested ternary expressions
// ---------------------------------------------------------------------
// Bad
{
    const a = Math.random() > 0.5 ? true : Math.random() > 0.3 ? true : Math.random() > 0.5 ? 'foo' : 'bar';
}
// Good
{
    let a = Math.random() > 0.5;

    if (!a) {
        a = Math.random() > 0.3;

        if (!a) {
            const c = Math.random() > 0.5;

            a = c ? 'foo' : 'bar';
        }
    }
}

// `no-new-object` - disallow Object constructors
// ---------------------------------------------------------------------
// Bad
{
    const a = new Object();
}
// Good
{
    class CustomObject {

    }
    const a = new CustomObject();
}

// `no-plusplus` - disallow the unary operators ++ and --
// ---------------------------------------------------------------------
// Bad
{
    let b = 1;

    b++;
}
// Good
{
    let b = 1;

    b += 1;
}

// `no-tabs` - disallow all tabs
// ---------------------------------------------------------------------
// Can't test this. Editor doesn't allow it

// `no-trailing-spaces` - disallow trailing whitespace at the end of lines
// ---------------------------------------------------------------------
// Can't test this one, editor doesn't let me :(

// `no-unneeded-ternary` - disallow ternary operators when simpler alternatives exist
// ---------------------------------------------------------------------
// Bad
{
    const b = 2;
    const a = b ? true : false;
}
// Good
{
    const b = 2;
    const a = b ? b : 0;
}

// `no-whitespace-before-property` - disallow whitespace before properties
// ---------------------------------------------------------------------
// Bad
{
    const obj = {};
    const prop = 'foo';
    const value = obj [prop];
}
// Good
{
    const obj = {};
    const prop = 'foo';
    const value = obj[prop];
}

// `object-curly-spacing` - enforce consistent spacing inside braces
// ---------------------------------------------------------------------
// Bad
{
    const a = {a: 2};
}
// Good
{
    const a = { a: 2 };
}

// `object-property-newline` - enforce placing object properties on separate lines
// ---------------------------------------------------------------------
// Bad
{
    const a = {
        a: 2, b: 3,
        c: 4,
    };
}
// Good
{
    const a = { a: 2, b: 3, c: 4 };
}
// Also good
{
    const a = {
        a: 2,
        b: 3,
        c: 4,
    };
}

// `one-var` - enforce variables to be declared either together or separately in functions
// ---------------------------------------------------------------------
// Bad
{
    const a = 3;
    const b = 4;
    const c = 1,
        d = 2;
}
// Good
{
    const a = 3;
    const b = 4;
    const c = 1;
    const d = 2;
}

// `one-var-declaration-per-line` - require or disallow newlines around variable declarations
// ---------------------------------------------------------------------
// Not allowed to set multiple variables with just one `var`, see rule above

// `operator-linebreak` - enforce consistent linebreak style for operators
// ---------------------------------------------------------------------
// Bad
{
    const b = 1
            + 2;
}
// Good
{
    const a = 1 +
              2;
}

// `padded-blocks` - require or disallow padding within blocks
// ---------------------------------------------------------------------
// Bad
if (Math.random() > 0.5) {

    console.log('foo');

}
// Good
if (Math.random() > 0.5) {
    console.log('foo');
}

// `padding-line-between-statements` - require newlines in certain situations
// ---------------------------------------------------------------------
// Bad
(function () {
    let foo;
    foo = 'Should have given an extra line before';
    foo = 'Yep, that \'s right';
})();
// Good
(function () {
    let foo;

    foo = 'Should have given an extra line before';
    foo = 'Yep, that \'s right';
})();
// Bad
{
    const foo = () => {
        const bar = 'bar';
        return true;
    };
}
// Good
{
    const foo = () => {
        const bar = 'bar';

        return true;
    };
}

// `quote-props` - require quotes around object literal property names
// ---------------------------------------------------------------------
// Bad
{
    const a = {
        aa: 2,
        'bb': 0,
    };
}
// Good
{
    const a = {
        aa: 2,
        bb: 0,
    };
}

// `quotes` - enforce the consistent use of either backticks, double, or single quotes
// ---------------------------------------------------------------------
// Bad
{
    const a = 'aa';
    const b = "bb";
}
// Good
{
    const a = 'aa';
    const b = 'bb';
}

// `semi` - require or disallow semicolons instead of ASI
// ---------------------------------------------------------------------
// Bad
{
    const name = 'foo'
}
// Good
{
    const name = 'foo';
}

// `semi-spacing` - enforce consistent spacing before and after semicolons
// ---------------------------------------------------------------------
// Bad
{
    const x = 1 ;
}
// Good
{
    const x = 1;
}

// `semi-style` - enforce location of semicolons
// ---------------------------------------------------------------------
// Bad
{
    const bar = () => {}

    ;[1, 2, 3].forEach(bar);
}
// Good
{
    const bar = () => {};

    [1, 2, 3].forEach(bar);
}

// `space-before-blocks` - enforce consistent spacing before blocks
// ---------------------------------------------------------------------
// Bad
{
    const x = () => {
        function foo(){
            // Do something
        }
    };
}
// Good
{
    const x = () => {
        function foo() {
            // Do something
        }
    };
}

// `space-before-function-paren` - enforce consistent spacing before function definition opening parenthesis
// ---------------------------------------------------------------------
// Bad
{
    const x = () => {
        function f () {
            // Do something
        }
    };
}
// Good
{
    const x = () => {
        function f() {
            // Do something
        }
    };
}

// `space-in-parens` - enforce consistent spacing inside parentheses
// ---------------------------------------------------------------------
// Bad
{
    const x = () => {
        function f( ) {
            // Do something
        }
    };
}
// Good
{
    const x = () => {
        function f() {
            // Do something
        }
    };
}

// `space-infix-ops` - require spacing around infix operators
// ---------------------------------------------------------------------
// Bad
{
    const a = 1+1;
}
// Good
{
    const a = 1 + 1;
}

// `space-unary-ops` - enforce consistent spacing before or after unary operators
// ---------------------------------------------------------------------
// Bad
{
    const foo = 'bar';
    const bar = typeof!foo;
}
// Good
{
    const foo = 'bar';
    const bar = typeof !foo;
}

// `spaced-comment` - enforce consistent spacing after the // or /* in a comment
// ---------------------------------------------------------------------
// Bad
//This is not right
/*Neither is this*/

// Good
// This is right
/* This too */

// `switch-colon-spacing` - enforce spacing around colons of switch statements
// ---------------------------------------------------------------------
// Bad
{
    const a = 0;

    switch (a) {
    case 0 :break;
    default : console.log('foo');
    }
}
// Good
{
    const a = 0;

    switch (a) {
    case 0: break;
    default: console.log('foo');
    }
}

// `template-tag-spacing` - require or disallow spacing between template tags and their literals
// ---------------------------------------------------------------------
// Bad
{
    const func = () => {};
    const hello = func `Hello world`;
}
// Good
{
    const func = () => {};
    const hello = func`Hello world`;
}

// `unicode-bom` - require or disallow Unicode byte order mark (BOM)
// ---------------------------------------------------------------------
// Can't test this
