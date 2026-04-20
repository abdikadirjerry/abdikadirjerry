// 03-bind-partial.js

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5)); // 10

/*
🧠 bind can fix arguments (partial application)
*/
