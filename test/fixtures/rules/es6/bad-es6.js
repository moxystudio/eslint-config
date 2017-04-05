/* =========== | Require braces in arrow function body | =========== */

const f = () => 1; // not active

/* =================== // =================== */


/* =========== | Require parens in arrow function arguments | =========== */

f => 0;

/* =================== // =================== */


/* =========== | Require space before/after arrow function's arrow | =========== */

(f)=>0;

/* =================== // =================== */


/* =========== | Verify super() callings in constructors | =========== */

class Test extends Component {
    constructor() {

    }
}

/* =================== // =================== */


/* =========== | Enforce the spacing around the * in generator functions | =========== */

function* aa() {
    yield "xy";
}

/* =================== // =================== */


/* =========== | Enforce the spacing around the * in generator functions | =========== */

function*aa() {
    yield "xx";
}

/* =================== // =================== */


/* =========== | Disallow modifying variables of class declarations | =========== */

class Test {}
Test = f;

/* =================== // =================== */


/* =========== | Disallow arrow functions where they could be confused with comparisons | =========== */

const x = (a) => 1 ? 2 : 3; // not active

/* =================== // =================== */


/* =========== | Disallow modifying variables that are declared using const | =========== */

const y = 2;
y = 1;

/* =================== // =================== */


/* =========== | Disallow duplicate name in class members | =========== */

class Test {
    f() { 1 };
    f() { 1 };

}

/* =================== // =================== */


/* =========== | Disallow duplicate module imports | =========== */

/* module.import { linter } from 'eslint';
module.import { cliEngine } from 'eslint'; */

// not active

/* =================== // =================== */


/* =========== | Disallow use of the new operator with the Symbol object | =========== */

const a = new Symbol('aaaa'); // ?

// ?

/* =================== // =================== */


/* =========== | Disallow to use this/super before super() calling in constructors | =========== */

class Test extends Component {
    constructor() {
        this.one = 1;
        super();
    }
}

/* =================== // =================== */


/* =========== | Disallow unnecessary constructor | =========== */

class Test extends Component {
    constructor() {
        super();
    }
}

/* =================== // =================== */


/* =========== | Require let or const instead of var | =========== */

var n = 0;

/* =================== // =================== */


/* =========== | Require method and property shorthand syntax for object literals | =========== */

const foo = {
    a: a,
};

/* =================== // =================== */


/* =========== | Suggest using arrow functions as callbacks | =========== */

f(function(k) { return k; });

/* =================== // =================== */


/* =========== | Suggest using of const declaration for variables that are never modified after declared | =========== */

let b = 0;
f();

/* =================== // =================== */


/* =========== | Suggest using Reflect methods where applicable | =========== */

delete f.a; // ?

/* =================== // =================== */


/* =========== | Suggest using the rest parameters instead of arguments | =========== */

function f1() {
    console.log(arguments);
}

/* =================== // =================== */


/* =========== | Suggest using the spread operator instead of .apply() | =========== */

f.apply(null, args);

/* =================== // =================== */


/* =========== | Suggest using the spread operator instead of .apply() | =========== */

const conc = 'a' + x;

/* =================== // =================== */


/* =========== | Generator functions that do not have yield | =========== */

function * aa() {
    f();
}

/* =================== // =================== */


/* =========== | Enforce spacing around embedded expressions of template strings | =========== */

`x is, ${ x}!`;

/* =================== // =================== */


/* =========== | Enforce spacing around the * in yield* expressions | =========== */

function * aaa() {
    yield*bbb();
}

/* =================== // =================== */
