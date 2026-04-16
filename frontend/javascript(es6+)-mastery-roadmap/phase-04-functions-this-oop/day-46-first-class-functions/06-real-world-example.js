// 06-real-world-example.js

const numbers = [1, 2, 3, 4, 5];

// map uses a function as argument
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// filter uses function
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4]

/*
🧠 Real Usage:
- map
- filter
- reduce

All use first-class functions
*/
