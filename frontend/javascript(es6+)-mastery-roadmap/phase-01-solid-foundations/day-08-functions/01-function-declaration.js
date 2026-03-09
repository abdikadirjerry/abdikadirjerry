/*
=====================================
01 — Function Declaration (12)
Focus: classic JavaScript function declaration
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===");

//1. Create a greeting function
function greetUser() {
  console.log("Hello, welcome to JavaScript practice!");
}

greetUser();


//2. Print a number message
function printNumber() {
  console.log("The number is 10");
}

printNumber();


//3. Create a function that prints your name
function showName() {
  console.log("Najio");
}

showName();


//4. Call a function multiple times
function sayHello() {
  console.log("Hello developer!");
}

sayHello();
sayHello();
sayHello();


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Function that adds two numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(4, 6));


//6. Function that checks if a number is even
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));


//7. Function that calculates the square
function squareNumber(num) {
  return num * num;
}

console.log(squareNumber(5));


//8. Function that converts minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(minutesToSeconds(5));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Function that finds the largest of three numbers
function findLargest(a, b, c) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(findLargest(4, 9, 2));


//10. Function that reverses a string
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("coding"));


//11. Function that counts vowels
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));


//12. Function that calculates factorial
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));