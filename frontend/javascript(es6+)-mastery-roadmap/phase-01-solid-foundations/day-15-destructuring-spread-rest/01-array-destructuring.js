// Challenge 1 — Extract first and second numbers
const numbers = [5, 10, 15];

const [first, second] = numbers;

console.log(first);
console.log(second);

// Challenge 2 — Skip the second element
const nums = [1, 2, 3, 4];

const [a, , b] = nums;

console.log(a);
console.log(b);

// Challenge 3 — Swap two variables
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);
