/* =========== | Disallow trailing commas in object literals | =========== */

var foo = {
    'x': '1',
    'y': '2'
};

/* =================== // =================== */


/* ===========| Disallow assignment in conditional expressions | =========== */

var f = 0;
if(f = Math.random()) {
    f++;
}

/* =================== // =================== */


/* ===========| Disallow use of console |=========== */

// console.error("hello");

/* =================== // =================== */


/* ===========| Disallow use of constant expressions in conditions |=========== */

if(false) {
    true;
}

/* =================== // =================== */


/* ===========| Disallow control characters in regular expressions |=========== */

var pattern = /\x1f/;

/* =================== // =================== */


/* ===========| Disallow use of debugger |=========== */

debugger;

/* =================== // =================== */


/* ===========| Disallow duplicate arguments in functions |=========== */

var f = function(arg, arg) {
      arg++;
}

/* =================== // =================== */


/* ===========| Disallow duplicate keys when creating object literals |=========== */

var xyz = {
    x: 1,
    x: 1,
}

/* =================== // =================== */


/* ===========| Disallow a duplicate case label |=========== */

var a = 0;
switch(a) {
    case 1: a++;
    case 1: a++;
}

/* =================== // =================== */


/* ===========| Disallow the use of empty character classes in regular expressions |=========== */

/^abc[]/.test("abcdefg");

/* =================== // =================== */


/* ===========| Disallow empty statements |=========== */

if(f == 1) {

}

/* =================== // =================== */


/* ===========| Disallow assigning to the exception in a catch block |=========== */

try {
    f++;
} catch(e) {
    e = 1;
} // not active

/* =================== // =================== */


/* ===========| Disallow double-negation boolean casts in a boolean context |=========== */

var a = !!!false;

/* =================== // =================== */


/* ===========| Disallow unnecessary parentheses |=========== */

typeof(a); // not active

/* =================== // =================== */


/* ===========| Disallow unnecessary semicolons |=========== */

var b = 0;;

/* =================== // =================== */


/* ===========| Disallow overwriting functions written as function declarations |=========== */

function c() {
    c = f;
}

/* =================== // =================== */


/* ===========| Disallow function or variable declarations in nested blocks |=========== */

if(f) {
    function d() { }
}

/* =================== // =================== */


/* ===========| Disallow invalid regular expression strings in the RegExp constructor |=========== */

RegExp('(');

/* =================== // =================== */


/* ===========| Disallow irregular whitespace outside of strings and comments |=========== */

function l() {
    f++;
}

/* =================== // =================== */


/* ===========| Disallow negation of the left operand of an in expression |=========== */

if(!f in ['a']) {
  f++;
}

/* =================== // =================== */


/* ===========| Disallow the use of object properties of the global object (Math and JSON) as functions |=========== */

var f = Math();

/* =================== // =================== */


/* ===========| Disallow multiple spaces in a regular expression literal |=========== */

RegExp('(            )');

/* =================== // =================== */


/* ===========| Disallow sparse arrays |=========== */

[,]

/* =================== // =================== */


/* ===========| Avoid code that looks like two expressions but is actually one |=========== */

var x = f
.f()

/* =================== // =================== */


/* ===========| Disallow unreachable statements after a return, throw, continue, or break statement |=========== */

if(a == -999) {
    throw new Error('out of bounds');
    a = 0;
}

/* =================== // =================== */


/* ===========| Disallow comparisons with the value NaN |=========== */

if(a == NaN) {
    throw new Error('NaN');
}

/* =================== // =================== */


/* ===========| Ensure JSDoc comments are valid |=========== */

// missing brace
// missing @returns tag
/**
 * @param {string name .
 */
function f(name) {
    console.log("Hello " + name);
}

/* =================== // =================== */


/* ===========| Ensure that the results of typeof are compared against a valid string |=========== */

typeof f === "strnig"

/* =================== // =================== */
