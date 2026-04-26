// 05-null-prototype.js

const obj = Object.create(null);

console.log(obj.__proto__); // undefined
