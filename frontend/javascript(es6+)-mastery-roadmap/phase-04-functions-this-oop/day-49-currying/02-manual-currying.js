// 02-manual-currying.js

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24

/*
🧠 Each argument → one function
*/
