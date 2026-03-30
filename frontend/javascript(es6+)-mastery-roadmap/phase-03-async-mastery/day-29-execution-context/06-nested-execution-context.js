/**
 * Day 29 - Execution Context
 * Topic: Nested Execution Context + Scope + Hoisting
 */

// Predict the output and explain why

var a = 1;

function outer() {
  console.log(a); // 1

  var a = 2;

  function inner() {
    console.log(a); // 2
  }

  inner();
}

outer();

// Explanation:
// 1. Global Execution Context:
//    - var a = 1

// 2. outer() Execution Context:
//    - 'var a' is hoisted → initialized as undefined
//    - So first console.log(a) → undefined (NOT 1)

// ❗ Important Correction:
// The actual output is:
// undefined
// 2

// WHY:
// - Inside 'outer', local 'a' shadows global 'a'
// - Due to hoisting, local 'a' exists as undefined at first
// - So console.log(a) → undefined
// - Then a = 2
// - inner() uses lexical scope → gets a = 2
