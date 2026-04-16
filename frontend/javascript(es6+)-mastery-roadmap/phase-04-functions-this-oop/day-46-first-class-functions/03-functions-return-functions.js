// 03-functions-return-functions.js

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);

console.log(double(5)); // 10

/*
🧠 Concept:
Functions can return other functions
*/
