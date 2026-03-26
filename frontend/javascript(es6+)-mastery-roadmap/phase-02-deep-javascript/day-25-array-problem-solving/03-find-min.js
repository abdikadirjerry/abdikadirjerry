// Challenge — Find Smallest Number

const numbers = [10, 5, 8, 2];

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Min:", min); // 2

// Time Complexity: O(n)
