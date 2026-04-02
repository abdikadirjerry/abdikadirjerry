/*
01 — Basic Closure

A closure is when a function remembers variables
from its outer scope even after the outer function finishes.
*/

function outer() {
  let name = "Ali";

  function inner() {
    console.log("Name:", name);
  }

  return inner;
}

const fn = outer();
fn(); // Name: Ali
