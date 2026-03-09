/*
=====================================
04 — Parameters vs Arguments (12)
Focus: function parameters
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===");

//1. Function with one parameter
function printNumber(num) {
  console.log("Number:", num);
}

printNumber(7);


//2. Function with two parameters
function add(a, b) {
  console.log("Sum:", a + b);
}

add(5, 3);


//3. Function greeting user by name
function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("Ali");


//4. Function printing age
function printAge(age) {
  console.log("You are " + age + " years old.");
}

printAge(25);


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Calculate rectangle area
function rectangleArea(width, height) {
  return width * height;
}

console.log(rectangleArea(5, 4));


//6. Calculate total price
function totalPrice(price, quantity) {
  return price * quantity;
}

console.log(totalPrice(10, 3));


//7. Calculate average of three numbers
function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(10, 20, 30));


//8. Combine first name + last name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("John", "Doe"));


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Function returning longest of two strings
function longestString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

console.log(longestString("javascript", "code"));


//10. Calculate distance (speed × time)
function calculateDistance(speed, time) {
  return speed * time;
}

console.log(calculateDistance(60, 2));


//11. Function checking if number is within range
function isWithinRange(num, min, max) {
  return num >= min && num <= max;
}

console.log(isWithinRange(15, 10, 20));
console.log(isWithinRange(25, 10, 20));


//12. Function building formatted sentence
function buildSentence(name, city) {
  return name + " lives in " + city + ".";
}

console.log(buildSentence("Sara", "London"));