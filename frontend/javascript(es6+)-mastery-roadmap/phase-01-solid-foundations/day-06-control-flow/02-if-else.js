/*
=====================================
01 — if statement (30)
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===");

//1. Check if age >= 18 → Adult / Minor
let age = 22;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Check if number even or odd
let num = 27;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number")
}

// Check if score pass or fail
let score = 87;

if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed")
}

// Check if number positive or negative
let numb = 7;

if (numb > 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

// Check if temperature hot or cold
let temperature = 32;

if (temperature >= 15) {
  console.log("Hot temperature");
} else {
  console.log("Cold temperature");
}

// Check if password correct or wrong
let isPassword = "1234567";

if (isPassword) {
  console.log("Correct password");
} else {
  console.log("Incorrect password");
}

// Check if item in stock or out of stock
let items = 21;

if (items > 0) {
  console.log("There's items left");
} else {
  console.log("Items out of stock");
}

// Check if user logged in or guest
let user = true

if (user) {
  console.log("Logged in");
} else {
  console.log("Guest");
}

// Check if number > 50 or <= 50
let num1 = 50;

if (num1 > 50) {
  console.log("Number is greater than 50");
} else {
  console.log("Number is less than or equal to 50")
}

// Check if day is weekend or weekday
let day = "saturday";

if (day === "Sunday" || day === "Monday") {
  console.log("It's a weekend");
} else {
  console.log("It's a weekday");
}
