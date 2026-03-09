/*
=====================================
03 — Arrow Functions (12)
Focus: modern ES6 arrow syntax
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===");

//1. Arrow function that prints "Arrow functions are modern JavaScript"
const arrowMessage = () => {
  console.log("Arrow functions are modern JavaScript");
};

arrowMessage();


//2. Arrow function that returns the square of a number
const square = (num) => num * num;

console.log(square(5));


//3. Arrow function that adds two numbers
const addNumbers = (a, b) => a + b;

console.log(addNumbers(4, 6));


//4. Arrow function that returns "Hello World"
const helloWorld = () => "Hello World";

console.log(helloWorld());


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Arrow function that calculates the cube of a number
const cube = (num) => num * num * num;

console.log(cube(3));


//6. Arrow function that checks if a number is greater than 50
const isGreaterThan50 = (num) => num > 50;

console.log(isGreaterThan50(60));
console.log(isGreaterThan50(40));


//7. Arrow function that returns the length of a string
const stringLength = (str) => str.length;

console.log(stringLength("JavaScript"));


//8. Arrow function that returns the first element of an array
const firstElement = (arr) => arr[0];

console.log(firstElement([10, 20, 30]));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Arrow function that finds the longest word in an array
const longestWord = (words) => {
  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};

console.log(longestWord(["cat", "elephant", "dog", "giraffe"]));


//10. Arrow function that counts numbers greater than 10
const countGreaterThan10 = (arr) => {
  let count = 0;

  for (let num of arr) {
    if (num > 10) {
      count++;
    }
  }

  return count;
};

console.log(countGreaterThan10([5, 12, 8, 21, 3, 17]));


//11. Arrow function that converts a string to uppercase
const toUpper = (str) => str.toUpperCase();

console.log(toUpper("javascript"));


//12. Arrow function that calculates the sum of all numbers in an array
const sumArray = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));