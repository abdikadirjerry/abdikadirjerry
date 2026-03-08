/*
=====================================
06 — Loop Performance (12)
Focus: performance thinking
=====================================
*/

// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Loop through 100 numbers
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//2. Sum numbers in array
let numbers = Array.from({length: 100}, (_, i) => i + 1);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//3. Compare two loops (for vs while)
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
for (let j = 0; j < 10; j++) {
  console.log(j);
}

//4. Loop through large array (1000 items)
let largeArray = Array.from({length: 1000}, (_, i) => i);
for (let num of largeArray) {
  // simple operation
  let square = num * num;
}


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Store array length before loop
let arr = [1,2,3,4,5,6,7,8,9,10];
let len = arr.length;
for (let i = 0; i < len; i++) {
  console.log(arr[i]);
}

//6. Compare for vs for...of
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (const val of arr) {
  console.log(val);
}

//7. Avoid unnecessary calculations
for (let i = 0, max = arr.length; i < max; i++) {
  console.log(arr[i]);
}

//8. Loop large dataset simulation
let dataset = Array.from({length: 10000}, (_, i) => i);
let total = 0;
for (let i = 0; i < dataset.length; i++) {
  total += dataset[i];
}
console.log(total);


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Nested loop complexity
let arr1 = [1,2,3];
let arr2 = [4,5,6];
for (let i of arr1) {
  for (let j of arr2) {
    console.log(i, j);
  }
}

//10. Detect duplicate numbers
let nums = [1,2,3,2,4,1,5];
let seen = {};
for (const num of nums) {
  if (seen[num]) {
    console.log(`${num} is a duplicate`);
  } else {
    seen[num] = true;
  }
}

//11. Optimize search in array
let searchArray = [5,12,8,21,3,17];
let target = 21;
let found = false;
for (const num of searchArray) {
  if (num === target) {
    found = true;
    break; // early exit
  }
}
console.log(found ? "Found" : "Not Found");

//12. Early exit with break
for (let i = 1; i <= 100; i++) {
  if (i > 50) break;
  console.log(i);
}