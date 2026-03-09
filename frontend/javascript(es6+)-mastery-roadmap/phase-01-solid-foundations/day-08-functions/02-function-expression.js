/*
=====================================
02 — Function Expression (12)
Focus: functions stored inside variables
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===")

//1. Function expression that prints "Learning JavaScript is fun"
let learnJS = function () {
  console.log("Learning JavaScript is fun");
};

learnJS();


//2. Function expression that prints your favorite programming language
let favoriteLanguage = function () {
  console.log("JavaScript");
};

favoriteLanguage();


//3. Function expression that returns the number 100
let returnHundred = function () {
  return 100;
};

console.log(returnHundred());


//4. Call a function expression twice
let greetDev = function () {
  console.log("Hello developer!");
};

greetDev();
greetDev();


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Function expression that adds two numbers
let addNumbers = function (a, b) {
  return a + b;
};

console.log(addNumbers(4, 6));


//6. Function expression that multiplies two numbers
let multiplyNumbers = function (a, b) {
  return a * b;
};

console.log(multiplyNumbers(3, 5));


//7. Function expression that converts Celsius to Fahrenheit
let celsiusToFahrenheit = function (celsius) {
  return (celsius * 9 / 5) + 32;
};

console.log(celsiusToFahrenheit(25));


//8. Function expression that checks if a number is positive
let isPositive = function (num) {
  return num > 0;
};

console.log(isPositive(10));
console.log(isPositive(-5));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Function expression that finds the smallest number in an array
let findSmallest = function (arr) {
  let smallest = arr[0];

  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }

  return smallest;
};

console.log(findSmallest([12, 5, 8, 3, 19]));


//10. Function expression that calculates the average of numbers in an array
let calculateAverage = function (arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
};

console.log(calculateAverage([10, 20, 30, 40]));


//11. Function expression that counts how many words are in a sentence
let countWords = function (sentence) {
  let words = sentence.split(" ");
  return words.length;
};

console.log(countWords("JavaScript practice is very helpful"));


//12. Function expression that checks if a word is a palindrome
let isPalindrome = function (word) {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return word === reversed;
};

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));