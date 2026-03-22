//  Challenge 1 — Print All Pairs
const numbers = [1, 2, 3];
console.log("--- All Pairs ---");
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}

//  Challenge 2 — Find Matching Values
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log("--- Matching Values ---");
for (let val of arr1) {
  if (arr2.includes(val)) {
    console.log(val);
  }
}

//  Challenge 3 — Remove Duplicates (Manual Way)
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
for (let i = 0; i < nums.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < unique.length; j++) {
    if (nums[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    unique.push(nums[i]);
  }
}
console.log("--- Unique Array ---", unique);
