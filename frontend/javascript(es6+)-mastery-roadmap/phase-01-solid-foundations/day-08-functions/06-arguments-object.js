/*
=====================================
06 — Arguments Object (12)
Focus: variable number of arguments
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===");

//1. Print all arguments
function printArguments() {
  console.log(arguments);
}

printArguments(1, 2, 3, "hello");


//2. Count arguments
function countArguments() {
  return arguments.length;
}

console.log(countArguments(10, 20, 30));


//3. Return first argument
function firstArgument() {
  return arguments[0];
}

console.log(firstArgument("apple", "banana", "orange"));


//4. Return last argument
function lastArgument() {
  return arguments[arguments.length - 1];
}

console.log(lastArgument(5, 10, 15, 20));


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Sum all arguments
function sumArguments() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sumArguments(1, 2, 3, 4));


//6. Find largest argument
function findLargest() {
  let largest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }

  return largest;
}

console.log(findLargest(4, 9, 2, 15, 7));


//7. Find smallest argument
function findSmallest() {
  let smallest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }

  return smallest;
}

console.log(findSmallest(10, 3, 8, 2, 6));


//8. Calculate average of arguments
function averageArguments() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum / arguments.length;
}

console.log(averageArguments(10, 20, 30, 40));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Multiply all arguments together
function multiplyArguments() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
}

console.log(multiplyArguments(2, 3, 4));


//10. Count how many arguments are even numbers
function countEvenNumbers() {
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers(1, 2, 3, 4, 5, 6));


//11. Build a sentence from arguments
function buildSentence() {
  let sentence = "";

  for (let i = 0; i < arguments.length; i++) {
    sentence += arguments[i] + " ";
  }

  return sentence.trim();
}

console.log(buildSentence("JavaScript", "is", "awesome"));


//12. Find longest string from arguments
function longestString() {
  let longest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }

  return longest;
}

console.log(longestString("cat", "elephant", "dog", "giraffe"));