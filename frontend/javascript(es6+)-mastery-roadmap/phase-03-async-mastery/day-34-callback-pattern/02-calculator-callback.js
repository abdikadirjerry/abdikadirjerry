const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x * y;
};

const multiply = (x, y) => {
  return x / y;
};

console.log(calculate(10, 2, add));
console.log(calculate(10, 2, subtract));
console.log(calculate(10, 2, multiply));
