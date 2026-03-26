// Challenge — Count Even Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}

console.log("Even count:", count); // 4

// Time Complexity: O(n)
