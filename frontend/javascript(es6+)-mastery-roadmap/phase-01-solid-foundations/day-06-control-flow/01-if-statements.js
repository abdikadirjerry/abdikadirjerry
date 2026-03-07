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

if (pass > 8) {
  console.log("You're password is strong");
}

//8. Check if user is logged in
let isLogged = true;

if (isLogged === true) {
  console.log("You're logged in")
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

if (arr.length > 6) {
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

if (score1 == 100) {
  console.log("You're claver student");
}

//20 Check if username exists
let userName = "Jerry";
let existUsername = "Jerry"

if (existUsername === userName) {
  console.log("Username is already exist");
}