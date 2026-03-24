// 🔥 Challenge 1 — Reverse Array

const arr1 = [1, 2, 3, 4];
let reversed = [];

for (let i = arr1.length - 1; i >= 0; i--) {
  reversed.push(arr1[i]);
}

console.log(reversed); // [4,3,2,1]

// 🔥 Challenge 2 — Count Even Numbers

const arr2 = [1, 2, 3, 4, 5, 6];
let count = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    count++;
  }
}

console.log(count); // 3

// 🔥 Challenge 3 — Find Minimum

const arr3 = [10, 5, 8, 2];
let min = arr3[0];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }
}

console.log(min); // 2
