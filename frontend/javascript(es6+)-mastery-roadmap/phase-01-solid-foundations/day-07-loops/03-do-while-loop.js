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