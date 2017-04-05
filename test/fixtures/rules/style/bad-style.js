/* =========== | Enforce spacing inside array brackets | =========== */

[1,2,3]

/* =================== // =================== */


/* =========== | Disallow or enforce spaces inside of single line blocks | =========== */

function f() {return false};

/* =================== // =================== */


/* =========== | Enforce one true brace style | =========== */

if (true)
{
    f();
}

/* =================== // =================== */


/* =========== | Require camel case names | =========== */

var a_a = 1;

/* =================== // =================== */


/* =========== | Enforce spacing before and after comma | =========== */

var a = concat(a,a);

/* =================== // =================== */


/* =========== | Enforce one true comma style | =========== */

var b = {
    first: 1
    ,
    second: 2,
};

/* =================== // =================== */


/* =========== | Disallow padding inside computed properties | =========== */

var c = obj[ 'error'];

/* =================== // =================== */


/* =========== | Enforces consistent naming when capturing the current execution context | =========== */

var self = this;

/* =================== // =================== */


/* =========== | Require function expressions to have a name | =========== */

var a = function () {
    f();
}; // not active

/* =================== // =================== */


/* =========== | Enforces use of function declarations or expressions | =========== */

function ab() {
    f(); // not active
}

/* =================== // =================== */


/* =========== | This option enforces minimum and maximum identifier lengths (variable names, property names etc.) | =========== */

var veryBigAndBadNameForSingleVariablesHashed = 1; // not active;

/* =================== // =================== */


/* =========== | Require identifiers to match the provided regular expression | =========== */

/* eslint id-match: ['error', '^[a-z]+([A-Z][a-z]+)*$'] */

// var my_favorite_color = '#112C85';

/* =================== // =================== */


/* =========== | This option sets a specific tab width for your code | =========== */

var obj = {
  a: 2,
}

/* =================== // =================== */


/* =========== | Specify whether double or single quotes should be used in JSX attributes | =========== */

// <a b='c' />

/* =================== // =================== */


/* =========== | Enforces spacing between keys and values in object literal properties | =========== */

var obj = {
    a:2,
}

/* =================== // =================== */


/* =========== | Enforces spacing before and after keywords | =========== */

if(a == 1) {
    f();
}

/* =================== // =================== */


/* =========== | Disallow mixed 'LF' and 'CRLF' as linebreaks | =========== */

var a = 'a\r\n'; // ?

/* =================== // =================== */


/* =========== | Enforces empty lines around comments | =========== */

// I would like to use this but the rule is very restrictive.. it lacks some flexibility
var a = 'before';
/* In between */
var b = 'after';

/* =================== // =================== */


/* =========== | Specify the maximum depth that blocks can be nested | =========== */

if (true) {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                        if (true) {
                            console.log('This is bad');
                        }
                    }
                }
            }
        }
    }
}

/* =================== // =================== */


/* =========== | Specify the maximum length of a line in your program | =========== */

var maximumLength = 'We are writting this to check which one is the maximum length of our program. It should be somewhere around here-[ x ]';

/* =================== // =================== */


/* =========== | Specify the maximum depth callbacks can be nested | =========== */

f(function () {
    a(function () {
        b(function () {
            c(function () {
                d(function () {
                    e(function () {
                        f(function () {

                        })
                    })
                })
            })
        })
    })
});

/* =================== // =================== */


/* =========== | Limits the number of parameters that can be used in the function declaration. | =========== */

function f(one, two, three, four, five, six, seven) {
    console.log('Too many args');
}

/* =================== // =================== */


/* =========== | Specify the maximum number of statement allowed in a function. | =========== */

function maxStatements() {
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
    var a = 1;
}

/* =================== // =================== */


/* =========== | Enforce a maximum number of statements allowed per line | =========== */

function f() { if (true) { console.log('Always enters here'); if (a.length > 0) { console.log('This is starting to get confusing'); } } };

/* =================== // =================== */


/* =========== | Require a capital letter for constructors | =========== */

var notCapital = new eslint();

/* =================== // =================== */


/* =========== | Disallow the omission of parentheses when invoking a constructor with no arguments | =========== */

var callingConstructor = new Eslint;

/* =================== // =================== */


/* =========== | Allow/disallow an empty newline after var statement | =========== */

var a = 0;
console.log('Should have given an extra line from this guy above');

/* =================== // =================== */


/* =========== | Require newline before return statement | =========== */

function f() {
    a();
    return true;
} // not active

/* =================== // =================== */


/* =========== | Enforce newline after each call when chaining the calls | =========== */

[1, 2, 3].find().filter(); // not active

/* =================== // =================== */


/* =========== | Disallow use of the Array constructor | =========== */

var b = Array(0, 1, 2);

/* =================== // =================== */


/* =========== | No-bitwise - disallow use of bitwise operators | =========== */

var a = a | b;

/* =================== // =================== */


/* =========== | Disallow use of the continue statement | =========== */

var x = 0;

for (x; x < 2; x += 1) {
    if (x >= 1) {
        continue;
    }
} // not active

/* =================== // =================== */


/* =========== | Disallow comments inline after code | =========== */

if (true) { // comment
   // more comments;
} // not active

/* =================== // =================== */


/* =========== | Disallow if as the only statement in an else block | =========== */

if (true) {
    f();
} else {
    if (false) {
        console.log('Only statement');
    }
}

/* =================== // =================== */


/* =========== | Disallow mixed spaces and tabs for indentation | =========== */

function f() {
    f();
}  // this won't throw a warning due to editorconfig

/* =================== // =================== */


/* =========== | Disallow multiple empty lines and only one newline at the end | =========== */





/* =================== // =================== */


/* =========== | Disallow negated conditions | =========== */

if (true != false) {

} // not active

/* =================== // =================== */


/* =========== | Disallow nested ternary expressions | =========== */

var a = true ? true : false ? false : true ? true : false;

/* =================== // =================== */


/* =========== | Disallow use of the Object constructor | =========== */

var a = new Object();

/* =================== // =================== */


/* =========== | Disallow use of unary operators, ++ and -- | =========== */

var a = b++;

/* =================== // =================== */


/* =========== | Disallow use of certain syntax in code | =========== */

// Nothing is disallowed

/* =================== // =================== */


/* =========== | Disallow space between function identifier and application | =========== */

function f
() {

}

/* =================== // =================== */


/* =========== | Disallow the use of ternary operators | =========== */

var a = a ? b : false; // not active

/* =================== // =================== */


/* =========== | Disallow trailing whitespace at the end of lines | =========== */

var a = 1;

/* =================== // =================== */


/* =========== | Disallow dangling underscores in identifiers | =========== */

f._a(); // not active

/* =================== // =================== */


/* =========== | Disallow the use of Boolean literals in conditional expressions | =========== */

var a = true ? true : false;

/* =================== // =================== */


/* =========== | Disallow whitespace before properties | =========== */

f [1, 2, 3];

/* =================== // =================== */


/* =========== | Require padding inside curly braces | =========== */

var a = {a: 2};

/* =================== // =================== */


/* =========== | Allow just one var statement per function | =========== */

function f() {
    var a;
    var b;
}

/* =================== // =================== */


/* =========== | Require or disallow an newline around variable declarations | =========== */

var a, b = 0, c, d;

/* =================== // =================== */


/* =========== | Require assignment operator shorthand where possible or prohibit it entirely | =========== */

x += 1; x = x+1; // not active

/* =================== // =================== */


/* =========== | Enforce operators to be placed before or after line breaks | =========== */

var a = 1 >
2;

var a = 1
> 2;

/* =================== // =================== */


/* =========== | Enforce padding within blocks | =========== */

if (a) {

    b();

}

/* =================== // =================== */


/* =========== | Require quotes around object literal property names | =========== */

var a = {
    "aa": 0
};

/* =================== // =================== */


/* =========== | Specify whether double or single quotes should be used | =========== */

var a = "aa";

/* =================== // =================== */


/* =========== | Require JSDoc | =========== */

// not active

/* =================== // =================== */


/* =========== | Enforce spacing before and after semicolons | =========== */

var a;var b;

/* =================== // =================== */


/* =========== | Sort import declarations within module | =========== */

// multiple - Import multiple members.
// import { func1, func2} from 'funcs.js'; // not active

/* =================== // =================== */


/* =========== | Require or disallow use of semicolons instead of ASI | =========== */

var name = "ESLint"

/* =================== // =================== */


/* =========== | Sort variables within the same declaration block | =========== */

// var b, a; // not active

/* =================== // =================== */


/* =========== | Require or disallow space before blocks | =========== */

function f(){
    a();
}

/* =================== // =================== */


/* =========== | Require or disallow space before function opening parenthesis | =========== */

function f () {

}

/* =================== // =================== */


/* =========== | Require or disallow spaces inside parentheses | =========== */

function f( ) {

}

/* =================== // =================== */


/* =========== | Require spaces around operators | =========== */

var a = 1+1;

/* =================== // =================== */


/* =========== | Require or disallow spaces before/after unary operators | =========== */

typeof!f;

/* =================== // =================== */


/* =========== | Require or disallow a space immediately following the // or /* in a comment | =========== */

//This is not right
/*Neither is this*/

/* =================== // =================== */


/* =========== | Require regex literals to be wrapped in parentheses | =========== */

function f() {
    return /aaa/.a();
} // not active

/* =================== // =================== */

/* =========== | Enforces newline at the end of file, with no multiple empty lines | =========== */
// Delete the last line. editorconfig corrects this
