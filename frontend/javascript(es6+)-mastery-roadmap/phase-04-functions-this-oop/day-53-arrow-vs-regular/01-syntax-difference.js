// 01-syntax-difference.js

// Regular Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
console.log(addArrow(2, 3));
