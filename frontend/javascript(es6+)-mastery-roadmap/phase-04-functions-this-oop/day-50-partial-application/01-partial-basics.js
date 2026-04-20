// 01-partial-basics.js

function add(a, b) {
  return a + b;
}

// Partial application
function partialAdd(a) {
  return function (b) {
    return add(a, b);
  };
}

const add5 = partialAdd(5);

console.log(add5(3)); // 8

/*
🧠 Fix one argument → reuse function
*/
