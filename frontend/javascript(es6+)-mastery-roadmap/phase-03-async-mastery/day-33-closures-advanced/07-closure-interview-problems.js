"use strict";

/*
07 — Closure Interview Problems
*/

// Problem 1
function outer() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

const a = outer();
const b = outer();

a(); // 10
b(); // 10

// Problem 2
function counter() {
  let count = 0;

  return {
    inc() {
      return ++count;
    },
    dec() {
      return --count;
    },
  };
}

const c = counter();
console.log(c.inc());
console.log(c.inc());
console.log(c.dec());

// Problem 3 (Tricky)
function test() {
  let value = 5;

  return function () {
    value *= 2;
    console.log(value);
  };
}

const t = test();
t(); // 10
t(); // 20
t(); // 40
