// Challenge 1 — Find Largest Number
const num = [5, 12, 3, 20, 8];
let largest = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }
}
console.log(largest);

// Challenge 2 — Reverse Array (No reverse())Challenge 2 — Reverse Array (No reverse())
const number = [1, 2, 3, 4];
let reversed = [];

for (let i = number.length - 1; i >= 0; i--) {
  reversed.push(number[i]);
}

console.log(reversed);

// Challenge 3 — Remove Duplicates
const numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log(unique);
