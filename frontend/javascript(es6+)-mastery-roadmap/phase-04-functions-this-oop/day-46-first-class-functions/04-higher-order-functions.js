// 04-higher-order-functions.js

function calculate(operation, a, b) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(add, 2, 3)); // 5
console.log(calculate(multiply, 2, 3)); // 6

/*
🧠 Concept:
Higher-order function = takes or returns functions
*/
