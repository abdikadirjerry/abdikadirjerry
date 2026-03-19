// Example 1: Undefined accumulator
const numbers = [1, 2, 3, 4];
let total;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// Example 2: String concatenation instead of sum
let sum = "";

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Example 3: Wrong average
let avg = 0;

for (let i = 0; i < numbers.length; i++) {
  avg += numbers[i] / numbers.length;
}
console.log(avg);

// Example 4: Reset inside loop
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result = 0; // wrong
  result += numbers[i];
}
console.log(result);
