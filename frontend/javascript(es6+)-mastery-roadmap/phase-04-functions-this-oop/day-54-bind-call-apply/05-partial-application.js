// 05-partial-application.js

function multiply(a, b) {
  return a * b;
}

// Fix first argument
const double = multiply.bind(null, 2);

console.log(double(5)); // 10
