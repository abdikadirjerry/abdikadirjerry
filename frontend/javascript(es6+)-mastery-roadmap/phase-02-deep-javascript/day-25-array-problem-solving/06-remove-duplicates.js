// Challenge — Remove Duplicates (Manual)

const numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let i = 0; i < numbers.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < unique.length; j++) {
    if (numbers[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique.push(numbers[i]);
  }
}

console.log("Unique:", unique); // [1,2,3,4,5]

// Time Complexity: O(n²)
