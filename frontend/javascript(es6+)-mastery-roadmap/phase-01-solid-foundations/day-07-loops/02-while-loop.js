/*
=====================================
02 — While Loop (12)
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Use a while loop to print numbers 1 to 10.
console.log("=== EASY ===");

// let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//2. Create a while loop that prints numbers 10 down to 1.
// let i = 10;

while (i >= 1) {
    console.log(i);
    i--
}

//3. Create a while loop that prints numbers 10 down to 1.
// let i = 1;

while (i <= 15) {
    if (i % 2 === 1) {
        console.log(i)
    }
    i++
}

//4. Use a while loop to calculate the sum of numbers from 1 to 20.

// let i = 1;
let sum = 0;

while (i <= 20) {
    sum += i;
    i++;
}
console.log(sum)


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Create an array of numbers and use a while loop to print every element in the array.
// let i = 0;
let arr = [1, 2, 3, 4, 5];

while (i <= arr.length) {
    console.log(arr[i]);
    i++
}

//6. Write a program that keeps doubling a number starting from 1 until it becomes greater than 200.
// let i = 1;

while (i <= 200) {
    i = i * 2;
    console.log(i);
    i++
}

//7. Count how many numbers in this array are greater than 10:
let numbers = [5, 12, 8, 21, 3, 17];
let count = 0;
// let i = 0;

while (i < numbers.length) {
  if (numbers[i] > 10) {
    count++;
  }
  i++;
}

console.log(count);

//8. Use a while loop to reverse a word.
let word = "coding";
let reversed = "";
let i = word.length - 1;

while (i >= 0) {
  reversed += word[i];
  i--;
}

console.log(reversed);
