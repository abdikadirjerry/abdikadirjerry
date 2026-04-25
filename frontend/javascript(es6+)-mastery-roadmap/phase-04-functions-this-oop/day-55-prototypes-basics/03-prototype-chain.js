// 03-prototype-chain.js

const arr = [1, 2, 3];

console.log(arr.__proto__); // Array prototype
console.log(arr.__proto__.__proto__); // Object prototype
console.log(arr.__proto__.__proto__.__proto__); // null
