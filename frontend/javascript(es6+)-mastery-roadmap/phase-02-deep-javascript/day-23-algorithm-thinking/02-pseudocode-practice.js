// 🟡 Challenge — Find Maximum

// 📌 PSEUDOCODE
// 1. Start
// 2. Assume first number is the largest
// 3. Loop through the array
// 4. Compare each number with current largest
// 5. If bigger → update largest
// 6. Return largest
// 7. End

// 📌 JAVASCRIPT
const numbers = [4, 10, 2, 99, 7];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Expected: 99
