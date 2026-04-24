// 05-implicit-return.js

// Regular
function square(a) {
  return a * a;
}

// Arrow implicit return
const squareArrow = (a) => a * a;

console.log(squareArrow(5));
