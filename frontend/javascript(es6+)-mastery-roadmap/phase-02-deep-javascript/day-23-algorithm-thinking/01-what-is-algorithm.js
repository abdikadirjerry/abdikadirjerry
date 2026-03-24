// 🟢 Challenge — Step Thinking

// 📌 PSEUDOCODE
// 1. Start
// 2. Create a variable called sum and set it to 0
// 3. Loop through each number in the array
// 4. Add each number to sum
// 5. Return sum
// 6. End

// 📌 JAVASCRIPT
const numbers = [5, 10, 15];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum); // Expected: 30
