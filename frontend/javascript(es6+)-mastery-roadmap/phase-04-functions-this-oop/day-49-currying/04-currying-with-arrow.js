// 04-currying-with-arrow.js

const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // 6

/*
🧠 Cleaner syntax using arrow functions
*/
