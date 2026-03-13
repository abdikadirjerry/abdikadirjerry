// Challenge 1 — Print All Numbers
const numbers = [3, 6, 9, 12];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Challenge 2 — Sum of Array
const num = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

// challenge 3 — Count Even Numbers
const number = [2, 7, 4, 9, 6, 3];
let events = 0;

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    events++;
  }
}
console.log(events);
