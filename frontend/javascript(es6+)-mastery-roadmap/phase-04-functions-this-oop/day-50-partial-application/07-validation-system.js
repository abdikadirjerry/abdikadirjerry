// 07-validation-system.js

function minLength(length, value) {
  return value.length >= length;
}

function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}

const min5 = partial(minLength, 5);

console.log(min5("Hello")); // true
console.log(min5("Hi")); // false

/*
🧠 Validation reuse
*/
