/*
=====================================
05 — Default Parameters (12)
Focus: default parameter values
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Greeting with default name
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Ahmed");


//2. Multiply numbers with default value
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 3));


//3. Default age parameter
function showAge(age = 18) {
  console.log("Age:", age);
}

showAge();
showAge(25);


//4. Default country
function showCountry(country = "Unknown") {
  console.log("Country:", country);
}

showCountry();
showCountry("Canada");


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Default tax calculation
function calculateTax(price, tax = 0.1) {
  return price + price * tax;
}

console.log(calculateTax(100));
console.log(calculateTax(100, 0.2));


//6. Default shipping cost
function calculateShipping(cost, shipping = 5) {
  return cost + shipping;
}

console.log(calculateShipping(50));
console.log(calculateShipping(50, 10));


//7. Default discount
function applyDiscount(price, discount = 0.1) {
  return price - price * discount;
}

console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.25));


//8. Default score
function showScore(score = 0) {
  return "Score: " + score;
}

console.log(showScore());
console.log(showScore(95));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Calculate total price with optional tax
function totalPrice(price, tax = 0.05) {
  return price + price * tax;
}

console.log(totalPrice(200));
console.log(totalPrice(200, 0.15));


//10. Build greeting message with optional title
function greetUser(name, title = "") {
  return "Hello " + title + " " + name;
}

console.log(greetUser("Ali"));
console.log(greetUser("Ali", "Dr."));


//11. Default array size generator
function generateArray(size = 5) {
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(generateArray());
console.log(generateArray(10));


//12. Default repeat text function
function repeatText(text, times = 3) {
  let result = "";

  for (let i = 0; i < times; i++) {
    result += text + " ";
  }

  return result.trim();
}

console.log(repeatText("Hello"));
console.log(repeatText("Hi", 5));