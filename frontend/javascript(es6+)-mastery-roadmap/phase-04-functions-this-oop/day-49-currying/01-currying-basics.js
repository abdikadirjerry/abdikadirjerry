// 01-currying-basics.js

// Normal function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

console.log(curriedAdd(2)(3)); // 5

/*
🧠 Currying:
Transform f(a, b) → f(a)(b)
*/
