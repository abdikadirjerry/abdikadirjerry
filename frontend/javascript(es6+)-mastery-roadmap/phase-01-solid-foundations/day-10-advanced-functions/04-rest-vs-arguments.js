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
