/*
=====================================
04 — switch Statements (30)
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===");

//1. Day of week message
let day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the work week");
    break;
  case "friday":
    console.log("Weekend is near");
    break;
  case "saturday":
  case "sunday":
    console.log("It's the weekend");
    break;
  default:
    console.log("Regular weekday");
}

//2. Month name
let month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Other month");
}

//3. Traffic light color
let light = "red";

switch (light) {
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("Invalid light");
}

//4. Basic calculator (+ - * /)
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}

//5. User role message
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access granted");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Read only access");
    break;
  default:
    console.log("Unknown role");
}

//6. Grade result
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good job");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Needs improvement");
}

//7. Fruit price lookup
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("$2 per kg");
    break;
  case "banana":
    console.log("$1 per kg");
    break;
  case "orange":
    console.log("$3 per kg");
    break;
  default:
    console.log("Fruit not available");
}

//8. Language greeting
let language = "spanish";

switch (language) {
  case "english":
    console.log("Hello");
    break;
  case "spanish":
    console.log("Hola");
    break;
  case "french":
    console.log("Bonjour");
    break;
  default:
    console.log("Hi");
}

//9. Direction message
let direction = "north";

switch (direction) {
  case "north":
    console.log("You are heading north");
    break;
  case "south":
    console.log("You are heading south");
    break;
  case "east":
    console.log("You are heading east");
    break;
  case "west":
    console.log("You are heading west");
    break;
}

//10. Weather type
let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("Wear sunglasses");
    break;
  case "rainy":
    console.log("Take an umbrella");
    break;
  case "cold":
    console.log("Wear a jacket");
    break;
  default:
    console.log("Weather unknown");
}