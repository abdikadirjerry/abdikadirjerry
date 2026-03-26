// 🔹 Challenge 1 — Find Average

const numbers1 = [10, 20, 30];

let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i];
}

let average = sum / numbers1.length;

console.log("Average:", average); // 20

// 🔹 Challenge 2 — Find Second Largest

const numbers2 = [10, 5, 8, 20];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    secondLargest = largest;
    largest = numbers2[i];
  } else if (numbers2[i] > secondLargest && numbers2[i] !== largest) {
    secondLargest = numbers2[i];
  }
}

console.log("Second Largest:", secondLargest); // 10

// 🔹 Challenge 3 — Merge Two Arrays

const arr1 = [1, 2];
const arr2 = [3, 4];

let merged = [];

for (let i = 0; i < arr1.length; i++) {
  merged.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  merged.push(arr2[i]);
}

console.log("Merged:", merged); // [1,2,3,4]
