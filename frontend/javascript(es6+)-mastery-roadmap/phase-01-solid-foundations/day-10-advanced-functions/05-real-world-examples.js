console.log("=== EASY ===");

// 1
function login(username) {
  if (username === undefined) username = "guest";
  console.log("User logged in as:", username);
}

// 2
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 3
function formatUsername(username) {
  return username.toUpperCase();
}

console.log("=== INTERMEDIATE ===");

// 4
function cartTotal() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 5
function passwordStrength(password) {
  if (password.length < 6) return "weak";
  if (password.length < 10) return "medium";
  return "strong";
}

// 6
function formatEmail(email) {
  if (email.indexOf("@") !== -1) return email;
  return "Invalid email";
}

console.log("=== ADVANCED ===");

// 8
function orderSummary(customerName) {
  let items = [];
  for (let i = 1; i < arguments.length; i++) {
    items.push(arguments[i]);
  }
  console.log("Customer:", customerName);
  console.log("Items:", items);
  console.log("Total items:", items.length);
}

// 9
function gradeAnalyzer() {
  let sum = 0;
  let highest = arguments[0];
  let lowest = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    if (arguments[i] > highest) highest = arguments[i];
    if (arguments[i] < lowest) lowest = arguments[i];
  }

  let average = sum / arguments.length;
  return { average: average, highest: highest, lowest: lowest };
}

// 9
function calculator(operation) {
  let numbers = [];
  for (let i = 1; i < arguments.length; i++) numbers.push(arguments[i]);

  let result;
  if (operation === "add") {
    result = 0;
    for (let i = 0; i < numbers.length; i++) result += numbers[i];
  } else if (operation === "subtract") {
    result = numbers[0];
    for (let i = 1; i < numbers.length; i++) result -= numbers[i];
  } else if (operation === "multiply") {
    result = 1;
    for (let i = 0; i < numbers.length; i++) result *= numbers[i];
  } else if (operation === "divide") {
    result = numbers[0];
    for (let i = 1; i < numbers.length; i++) result /= numbers[i];
  } else {
    result = null;
  }
  return result;
}