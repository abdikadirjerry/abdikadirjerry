// Challenge — Find Largest Number

const numbers = [5, 10, 2, 99, 4];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Max:", max); // 99

// Time Complexity: O(n)
