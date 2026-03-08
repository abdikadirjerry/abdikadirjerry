/*
=====================================
03 — Do While Loop (12)
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Print numbers 1–5
// let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//2. Print numbers 5–1 in reverse
// let i = 5;
do {
  console.log(i);
  i--;
} while (i >= 1);

//3. Print numbers 1–20 divisible by 4
// let i = 1;
do {
  if (i % 4 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);

//4. Print each character of "hello"
let str = "hello";
// let i = 0;
do {
  console.log(str[i]);
  i++;
} while (i < str.length);


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Count how many numbers from 1–50 are even
// let i = 1;
let count = 0;
do {
  if (i % 2 === 0) {
    count++;
  }
  i++;
} while (i <= 50);
console.log(count);

//6. Calculate sum of numbers from 1–30
// let i = 1;
let sum = 0;
do {
  sum += i;
  i++;
} while (i <= 30);
console.log(sum);

//7. Print numbers until the sum becomes greater than 100
let sum1 = 0;
// let i = 1;
do {
  sum += i;
  console.log(i);
  i++;
} while (sum <= 100);

//8. Find largest number in an array
let numbers = [12, 45, 7, 23, 89, 34];
let largest = numbers[0];
// let i = 1;

do {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
  i++;
} while (i < numbers.length);

console.log(largest);

