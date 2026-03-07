/*
=====================================
01 — if statement (30)
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===");

//1. Check if number > 10
let num = 12;

if (num > 10) {
  console.log("You're number is greater than 10 ");
}

//2. Check if age >= 18
let age = 23;

if (age >= 18) {
  console.log("You're older");
}

//3. Check if temperature > 30
let temp = 45;

if (temp > 30) {
  console.log("It's hot today");
}

//4. Check if score >= 50
let score = 78;

if (score >= 50) {
  console.log("You passed in the exam");
}

//5. Check if number is positive
let numPositive = 12;

if (numPositive > 0) {
    console.log("you're number is positive");
}

//6. Check if number is negative
let numNegative = -12;

if (numNegative < 0) {
  console.log("You're number is negative");
}

//7. Check if password length > 8
let pass = 123456789;

if (pass.length > 8) {
  console.log("You're password is strong");
}

//8. Check if user is logged in
let isLogged = true;

if (isLogged) {
  console.log("User is logged in")
}

//9. Check if price > 100
let price = 134;

if (price > 100) {
  console.log("You get a 5% of discount");
}

//10. Check if name is "Jerry"
let name = "Jerry"

if (name === "Jerry") {
  console.log(`You're name is ${name}`);
}


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

//11. Check if a number is even
let numEven = 12;

if (numEven % 2 === 0) {
  console.log("You're number is even");
}

//12. Check if a number is odd
let numOdd = 31;

if (numOdd % 2 !== 0) {
  console.log("You're number is odd");
}

//13. Check if a number > 100
let hundred = 101;

if (hundred > 100) {
  console.log("You're number is greaten then 100");
}

//14. Check if a string is empty
let empty = "";

if (empty === "") {
  console.log("empty string");
}

//15. Check if array length > 5
let arr = [1, 2, 3, 4, 5, 6, 7];

if (arr.length > 5) {
  console.log("You're array length is greaten then 6");
}

//16. Check if array length > 5
let userAge = 33;

if (userAge >= 21) {
  console.log("You're allowed");
}

//17. Check if salary > 5000
let salary = 10000;

if (salary > 5000) {
  console.log("You're bonus is 10%");
}

//18. Check if item stock > 0
let item = 12;

if (item > 0) {
  console.log("The items left in store are enough today");
}

//19. Check if item stock > 0
let score1 = 100;

if (score1 === 100) {
  console.log("You're claver student");
}

//20 Check if username exists
let username = "Jerry";

if (username) {
  console.log("Username exists");
}

// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

//21. Check if number divisible by 3
let num1 = 3;

if (num1 % 3 === 0) {
  console.log("You're number is divisible by 3");
}

//22. Check if number divisible by 3
let num2 = 5;

if (num2 % 5 === 0) {
  console.log("You're number is divisible by 5");
}

//23. Check if divisible by 3 AND 5
let num3 = 15;

if (num3 % 3 === 0 && num3 % 5 === 0) {
  console.log("You're number is divisible by 3 AND 5")
}

//24. Check if number between 10 and 20
let num4 = 11;

if (num4 > 10 && num4 <20) {
  console.log("You're number is between 10 and 20")
}

//25. Check if temperature < 0
let temperature = -13;

if (temperature < 0) {
  console.log("Temperature is cold");
}

//26. Check if user role is "admin"
let role = "admin";

if (role === "admin") {
  console.log("You are admin");
}

//27. Check if cart items > 0
let cart = 12;

if (cart > 0) {
  console.log("Cart has items");
}

//28. Check if login attempts > 3
let loginAttempts = 4;

if (loginAttempts > 3) {
  console.log("Too many login attempts");
}

//29. Check if email includes "@"
let email = "test@test.com";

if (email.includes("@")) {
  console.log("You're email is correct");
}

//30. Check if password includes "!"
let password = "axios!";

if (password.includes("!")) {
  console.log("You're password is good");
}