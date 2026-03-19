// Example 1: Initialize accumulator
const numbers = [1, 2, 3, 4];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// Example 2: Correct number sum
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Example 3: Correct average
let avg = 0;

for (let i = 0; i < numbers.length; i++) {
  avg += numbers[i];
}
avg = avg / numbers.length;
console.log(avg);

// Example 4: Proper accumulation
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(result);
