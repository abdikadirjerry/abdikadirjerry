"use strict";

/*
04 — Closure Memory Leak Example
*/

function createHeavyClosure() {
  let bigData = new Array(1000000).fill("🔥");

  return function () {
    console.log("Using big data...");
  };
}

let handler = createHeavyClosure();

// Simulate usage
handler();

// ❗ Problem:
// bigData stays in memory because closure references it

// Fix:
handler = null;

/*
Now:
- No references remain
- GC can clean bigData
*/
