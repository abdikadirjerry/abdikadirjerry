/*
=====================================
03 — else if chain (30)
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===");

//1. Grade system A/B/C/D
let grade = 10;

if (grade >= 85) {
    console.log("A");
} else if (grade >= 65) {
    console.log("B");
} else if (grade >= 55) {
    console.log("C");
} else if (grade >= 50) {
    console.log("D");
} else {
    console.log("F");
}

//2. Age groups child/teen/adult
let age = 23;

if (age > 0 && age <= 12) {
    console.log("child");
} else if (age >= 13 && age <= 19) {
    console.log("teen");
} else if (age >= 20) {
    console.log("adult")
} else {
    console.log("invalid age")
}

//3. Temperature cold/warm/hot
let temperature = 1;

if (temperature <= 15) {
    console.log("cold");
} else if (temperature <= 25) {
    console.log("warm");
} else {
    console.log("Hot");
}

//4. Speed slow/medium/fast
let speed = 100;

if (speed <= 20) {
    console.log("slow");
} else if (speed <= 60) {
    console.log("medium");
} else {
    console.log("fast");
}

//5. Score categories
let score = 85;

if (score >= 90 && score <= 100) {
  console.log("A - Excellent");
} else if (score >= 80 && score < 90) {
  console.log("B - Very Good");
} else if (score >= 70 && score < 80) {
  console.log("C - Good");
} else if (score >= 60 && score < 70) {
  console.log("D - Pass");
} else if (score >= 0 && score < 60) {
  console.log("F - Fail");
} else {
  console.log("Invalid score");
}

//6. User levels beginner/intermediate/advanced
let points = 23;

if (points > 0 && points <= 100) {
    console.log("beginner");
} else if (points > 100 && points <=500) {
    console.log("intermediate");
} else if (points > 500) {
    console.log("advanced");
} else {
    console.log("invalid points")
}

//7. Product price ranges
let price = 121;

if (price > 0 && price <= 100) {
    console.log("cheap")
} else if (price > 100 && price <= 300) {
    console.log("moderate")
} else if (price > 300 && price <=1000) {
    console.log("Expensive");
} else if (price > 700) {
    console.log("Luxury");
} else {
  console.log("Invalid price");
}

//8. Game difficulty levels
let gameLevel = 12;

if (gameLevel > 0 && gameLevel <= 25) {
    console.log("easy");
} else if (gameLevel > 25 && gameLevel <= 50) {
    console.log("medium");
} else if (gameLevel > 50 && gameLevel <= 75) {
    console.log("hard");
} else if (gameLevel > 75 && gameLevel <= 100) {
    console.log("extreme");
} else {
    console.log("invalid level");
}

//9. Password strength
let password = "2344425678@";

if (password.length > 0 && password.length <= 6) {
    console.log("Weak password");
} else if (password.length > 6 && password.length <10) {
    console.log("medium password");
} else if (password.length > 10 && password.includes("@")&& /\d/.test(password)) {
    console.log("strong password");
} else {
    console.log("normal password");
}

//10. Day type weekday/weekend
let day = "tuesday";

if (day === "saturday" || day === "sunday") {
    console.log("Weekend");
} else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
) {
    console.log("Weekday");
} else {
    console.log("Invalid day");
}