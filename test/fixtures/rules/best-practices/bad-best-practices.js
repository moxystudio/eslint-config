/* =========== | Enforces getter/setter pairs in objects | =========== */

(function() {
  var obj = {
      set value(value) {
          this.val = value;
      }
  };
})(); // not active

/* =================== // =================== */


/* =========== | Enforces return statements in callbacks of array's methods | =========== */

[1, 2, 3].map(function(item) {
    item = item + 1;
})

/* =================== // =================== */


/* =========== | Treat var statements as if they were block scoped | =========== */

(function f() {
    if(true) {
        var a = 1;
    } else {
        a = 2;
    }
});

/* =================== // =================== */


/* =========== | Specify the maximum cyclomatic complexity allowed in a program | =========== */

/* function f(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
} // not active

/* =================== // =================== */


/* =========== | Require return statements to either always or never specify values | =========== */

/* function f(x) {
    if(x > 5) {
        return true;
    }
} */ // not active

/* =================== // =================== */


/* =========== | Specify curly brace conventions for all control statements | =========== */

if(true)
  f();

/* =================== // =================== */


/* =========== | Require default case in switch statements | =========== */

switch(x) {
    case 1: f(); break;
    case 2: a(); break;
}

/* =================== // =================== */


/* =========== | Enforces consistent newlines before or after dots | =========== */


(function() {
  var a = obj.
  a;
})();

/* =================== // =================== */


/* =========== | Enforces consistent newlines before or after dots | =========== */


(function() {
  var a = obj.
  a;
})();

/* =================== // =================== */


/* =========== | Encourages use of dot notation whenever possible | =========== */


(function() {
  var a = obj["a"];
})();

/* =================== // =================== */


/* =========== | Require the use of === and !== | =========== */


(function() {
  if(x == 1 || x != 5) {

  }
})();

/* =================== // =================== */


/* =========== | Require the use of === and !== | =========== */


(function() {
  if(x == 1 || x != 5) {

  }
})();

/* =================== // =================== */


/* =========== | Make sure for-in loops have an if statement | =========== */

/* for (key in foo) {
    doSomething(key);
} // not active */

/* =================== // =================== */


/* =========== | Disallow the use of alert, confirm, and prompt | =========== */

alert('Hello');

/* =================== // =================== */


/* =========== | Disallow use of arguments.caller or arguments.callee | =========== */

(function() {
  function foo(n) {
      if (n <= 0) {
          return;
      }

      arguments.callee(n - 1);
  }
})();

/* =================== // =================== */


/* =========== | Disallow lexical declarations in case clauses | =========== */


// doesn't work in 5


(function() {
    switch(x) {
        case 1: let y = 0; break;
        default: break;
    }
})();

/* =================== // =================== */


/* =========== | Disallow division operators explicitly at beginning of regular expression | =========== */

(function() {
    function f() {
        return /f/;
    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow else after a return in an if | =========== */

(function() {
    if(true) {
        return false;
    } else {
        return true;
    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of empty functions | =========== */

(function() {
    function f() {

    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of empty destructuring patterns | =========== */

(function() {
    [] = 0;
})();

/* =================== // =================== */


/* =========== | Disallow comparisons to null without a type-checking operator | =========== */

(function() {
    if(x == null) {

    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of eval() | =========== */

this.eval("var a = 0");

/* =================== // =================== */


/* =========== | Disallow adding to native types | =========== */

Object.prototype.a = "a";

/* =================== // =================== */


/* =========== | Disallow unnecessary function binding | =========== */

(function() {
  var x = function () {
      foo();
  }.bind(bar);
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary labels | =========== */

(function() {
    var x = 0;
    A: for(x = 0; x < 2; x+=1) {

    }
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary labels | =========== */

(function() {
      var x = 0;
      A: for(x; x < 2; x+=1) {
        break A;
      }
})();

/* =================== // =================== */


/* =========== | Disallow fallthrough of case statements | =========== */

switch(x) {
    case 1:
      f();
    default: a(); break;
}

/* =================== // =================== */


/* =========== | Disallow the use of leading or trailing decimal points in numeric literals | =========== */

(function() {
    var x = .5;
})();

/* =================== // =================== */


/* =========== | Disallow the type conversions with shorter notations | =========== */

(function() {
    var b = !!foo;
})(); // not active

/* =================== // =================== */


/* =========== | Disallow var and named functions in global scope | =========== */

var x = 0;

/* =================== // =================== */


/* =========== | Disallow use of eval()-like methods | =========== */

setTimeout("alert('Hello!');", 1000);

/* =================== // =================== */


/* =========== | Disallow this keywords outside of classes or class-like objects | =========== */

// only in strict mode -> 'use strict' on top
(function() {
    this.a = 0;
    f(() => this);
})();  // ES6

/* =================== // =================== */


/* =========== | Disallow usage of __iterator__ property | =========== */

a.__iterator__ = function () {};

/* =================== // =================== */


/* =========== | Disallow use of labeled statements | =========== */

(function() {
    A: if(true) {

    }
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary nested blocks | =========== */

(function() {
    {
    }
})();

/* =================== // =================== */


/* =========== | Disallow creation of functions within loops | =========== */

(function() {
    var x = 0;
    for(x; x < 2; x+=1) {
        function f() {
            console.log('Can\'t');
        }
    }
})();

/* =================== // =================== */


/* =========== | Disallow the use of magic numbers | =========== */

(function() {
    var x = 0, y = x + (5 * 2 + 3);
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of multiple spaces | =========== */

(function() {
    var x = 0       ;
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of multiline strings | =========== */

//comment: multiline strings are supported in IE9 and higher.. so why should one still
//                    live in 1990?

(function() {
    var str = 'is this' +
    'something cool?' +
    'or is it not?'
})(); // not active

/* =================== // =================== */


/* =========== | Disallow reassignments of native objects | =========== */

(function() {
    Object = a;
})();

/* =================== // =================== */


/* =========== | Disallow use of new operator for Function object | =========== */

(function() {
    var x = new Function();
})();

/* =================== // =================== */


/* =========== | Disallow creating new instances of String, Number, and Boolean | =========== */

(function() {
    var x = new String();
})();

/* =================== // =================== */


/* =========== | Disallow use of new operator when not part of the assignment or comparison | =========== */

(function() {
    new function f() {

    }
})();

/* =================== // =================== */


/* =========== | Disallow use of octal escape sequences in string literals | =========== */

(function() {
    var foo = 'Copyright \251';
})();

/* =================== // =================== */


/* =========== | Disallow use of (old style) octal literals | =========== */

(function() {
    var num = 013;
})();

/* =================== // =================== */


/* =========== | Disallow reassignment of function parameters | =========== */

(function() {
    function f(one, two) {
        one = two;
    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow use of process.env | =========== */

(function() {
    if(process.env.NODE_ENV === "development") {

    }
})(); // not active

/* =================== // =================== */


/* =========== | Disallow usage of __proto__ property | =========== */

(function() {
    var a = obj.__proto__;
})();

/* =================== // =================== */


/* =========== | Disallow declaring the same variable more then once | =========== */

(function() {
    var a = 1;
    var a = 2;
})();

/* =================== // =================== */


/* =========== | Disallow use of assignment in return statement | =========== */

(function() {
    var a;
    return a = 1;
})();

/* =================== // =================== */


/* =========== | Disallow use of `javascript:` urls. | =========== */

location.href = "javascript:void(0)";

/* =================== // =================== */


/* =========== | Disallow assignments where both sides are exactly the same | =========== */

(function() {
    var a = 1;
    a = a;
})();

/* =================== // =================== */


/* =========== | Disallow comparisons where both sides are exactly the same | =========== */

(function() {
    if(a === a) {
        return false;
    }
})();

/* =================== // =================== */


/* =========== | Disallow use of comma operator | =========== */

(function() {
    if(a == 1, !false) {
        return false;
    }
})();

/* =================== // =================== */


/* =========== | Restrict what can be thrown as an exception | =========== */

(function() {
    throw "error"
})();

/* =================== // =================== */


/* =========== | Disallow unmodified conditions of loops | =========== */

(function() {
    var a = 0;
    while(a) {
      f(a);
    }
})();

/* =================== // =================== */


/* =========== | Disallow usage of expressions in statement position | =========== */

(function() {
    k
})();

/* =================== // =================== */


/* =========== | Disallow unused labels | =========== */

(function() {
    A: f();  // eslint-disable-line no-labels
    B: if(true) {   // eslint-disable-line no-labels
        f();
    }
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary .call() and .apply() | =========== */

(function() {
    f.call(undefined);
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary concatenation of literals or template literals | =========== */

(function() {
    var x = 'a' + 'a';
})();

/* =================== // =================== */


/* =========== | Disallow unnecessary escape characters | =========== */

(function() {
    var x = '\"a';
})();

/* =================== // =================== */


/* =========== | Disallow use of void operator | =========== */

(function() {
    void(0);
})();

/* =================== // =================== */


/* =========== | Disallow usage of configurable warning terms in comments: e.g. todo | =========== */

(function() {
    // TODO
})();

/* =================== // =================== */


/* =========== | Disallow use of the with statement | =========== */

(function() {
    with (something) {

    }
})();

/* =================== // =================== */


/* =========== | Require use of the second argument for parseInt() | =========== */

(function() {
    var x = parseInt("13");
})();

/* =================== // =================== */


/* =========== | Requires to declare all vars on top of their containing scope | =========== */

(function() {
    if(true) {
        var x = 0;
    }
})();

/* =================== // =================== */


/* =========== | Requires immediate function invocation to be wrapped in parentheses | =========== */

(function() {
    var x = function f() {

    }();
})();

/* =================== // =================== */


/* =========== | Requires or disallow Yoda conditions | =========== */

(function() {
    if("Hello" == a) {

    }
})();

/* =================== // =================== */
