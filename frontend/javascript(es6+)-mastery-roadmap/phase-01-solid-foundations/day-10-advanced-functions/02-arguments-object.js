console.log("=== EASY ===");
// 1
function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
showArguments(10, 20, 30);

// 2
function countArgs() {
  return arguments.length;
}
console.log(countArgs(1, 2, 3, 4));

// 3
function firstLast() {
  console.log("First:", arguments[0]);
  console.log("Last:", arguments[arguments.length - 1]);
}
firstLast(10, 20, 30, 40);

console.log("=== INTERMEDIATE ===");
// 4
function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumNumbers(1, 2, 3, 4));

// 5

function findMax() {
  let largest = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }
  return largest;
}

console.log(findMax(1, 5, 11, 43, 5));

// 6
function countEven() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sum++;
    }
  }
  return sum;
}

console.log(countEven(2, 5, 6, 9, 10));

console.log("=== ADVANCED ===");
// 7
function reverseArgs() {
  for (let i = arguments.length - 1; i >= 0; i--) {
    console.log(arguments[i]);
  }
}
console.log(reverseArgs(2, 5, 6, 9, 10));

// 8
function averageArgs() {
  if (arguments.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum / arguments.length;
}
console.log(averageArgs(2, 4, 6, 8));

// 9
function typeCounter() {
  let numbers = 0;
  let strings = 0;
  let booleans = 0;

  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];

    if (type === "number") numbers++;
    else if (type === "string") strings++;
    else if (type === "boolean") booleans++;
  }
  return { numbers, strings, booleans };
}

console.log(typeCounter(10, "hello", true, 5, "world", false));