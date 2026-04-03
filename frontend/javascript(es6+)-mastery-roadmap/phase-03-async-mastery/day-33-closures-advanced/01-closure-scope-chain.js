"use strict";

/*
01 — Closure + Scope Chain

Understand how closures access variables across scopes
*/

let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function middle() {
    let middleVar = "I am middle";

    function inner() {
      console.log("Access global:", globalVar);
      console.log("Access outer:", outerVar);
      console.log("Access middle:", middleVar);
    }

    return inner;
  }

  return middle();
}

const fn = outer();
fn();

/*
Expected:
- inner() remembers ALL parent scopes
- This is called the scope chain
*/
