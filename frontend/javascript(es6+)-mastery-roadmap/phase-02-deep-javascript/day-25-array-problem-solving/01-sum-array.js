// Challenge — Sum Array

const numbers = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum:", sum); // 100

// Time Complexity: O(n)
// Reason: We loop through the array once
