// 06-function-composition.js

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const resultFn = compose(add2, multiply3);

console.log(resultFn(5)); // (5 * 3) + 2 = 17

/*
🧠 Composition = combining functions
*/
