console.log("=== EASY ===");

// 1
function sumArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// 2
function sumRest(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// 3
function compareSum() {
  let argsSum = sumArguments.apply(null, arguments);
  let restSum = sumRest(...arguments);
  console.log("Arguments sum:", argsSum);
  console.log("Rest sum:", restSum);
}

console.log("=== INTERMEDIATE ===");

// 4
function maxArguments() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}

function maxRest(...numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

// 5
function sumArgumentsArray() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 6
function filterGreaterThan10(...numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) result.push(numbers[i]);
  }
  return result;
}
