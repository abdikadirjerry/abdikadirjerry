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

if (price <= 100) {
  console.log("Cheap");
} else if (price <= 300) {
  console.log("Moderate");
} else if (price <= 700) {
  console.log("Expensive");
} else {
  console.log("Luxury");
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

if (password.length < 6) {
  console.log("Weak");
} else if (password.length < 10) {
  console.log("Medium");
} else if (password.includes("@") && /\d/.test(password)) {
  console.log("Strong");
} else {
  console.log("Normal");
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


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

//11. BMI categories
let height = 178;
let weight = 75;
weight / (height * height);

if (BMI > 0 && BMI <= 18) {
    console.log("Underweight");
} else if (BMI > 18 && BMI <= 25) {
    console.log("Healthy weight");
} else if (BMI > 25 && BMI <= 30) {
    console.log("Overweight");
} else {
    console.log("Obese")
}

//12. Internet speed categories
let internetSpeed = 11;

if (internetSpeed > 0 && internetSpeed <= 10) {
    console.log("low speed");
} else if (internetSpeed > 10 && internetSpeed <= 30) {
    console.log("normal speed");
} else if (internetSpeed > 30 && internetSpeed <= 60) {
    console.log("High speed");
} else if (internetSpeed > 100) {
    console.log("extremely high speed");
} else {
    console.log("invalid speed");
}

//13. Salary tax brackets
let salary = 50000;
let tax;

if (salary <=1000) {
    tax = 0;
} else if (salary <= 2000) {
    tax = (salary * 10) / 100;
} else if (salary <= 3000) {
    tax = (salary * 20) / 100;
} else if (salary <= 5000) {
    tax = (salary * 30) / 100;
} else {
    tax = (salary * 45) / 100;
}

console.log("Salary: $" + salary);
console.log("Tax owed: $" + tax);

//14. Student grade classification
let score1 = 82;

if (score1 >= 90) {
  console.log("Grade A");
} else if (score1 >= 80) {
  console.log("Grade B");
} else if (score1 >= 70) {
  console.log("Grade C");
} else if (score1 >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

//15. Movie age rating
let age1 = 15;

if (age1 < 13) {
  console.log("PG");
} else if (age1 < 18) {
  console.log("PG-13");
} else {
  console.log("R Rated");
}

//16. Weather type
let temperature1 = 32;

if (temperature1 >= 35) {
  console.log("Hot Weather");
} else if (temperature1 >= 20) {
  console.log("Warm Weather");
} else if (temperature1 >= 10) {
  console.log("Cool Weather");
} else {
  console.log("Cold Weather");
}

//17. Shipping cost tiers
let weight1 = 7;
let cost;

if (weight1 <= 2) {
  cost = 5;
} else if (weight1 <= 5) {
  cost = 10;
} else if (weight1 <= 10) {
  cost = 15;
} else {
  cost = 25;
}

console.log("Shipping cost: $" + cost);

//18. Discount levels
let purchase = 250;
let discount;

if (purchase >= 500) {
  discount = 20;
} else if (purchase >= 200) {
  discount = 10;
} else if (purchase >= 100) {
  discount = 5;
} else {
  discount = 0;
}

console.log("Discount: " + discount + "%");

//19. Exam result classification
let marks = 65;

if (marks >= 75) {
  console.log("Distinction");
} else if (marks >= 60) {
  console.log("Pass");
} else if (marks >= 50) {
  console.log("Supplementary Exam");
} else {
  console.log("Fail");
}

//20. Driving speed penalty levels
let speed1 = 110;

if (speed1 <= 60) {
  console.log("Safe Speed");
} else if (speed1 <= 80) {
  console.log("Warning");
} else if (speed1 <= 100) {
  console.log("Fine");
} else {
  console.log("License Suspension");
}


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

//21. Credit score categories
let creditScore = 720;

if (creditScore >= 800) {
  console.log("Excellent Credit");
} else if (creditScore >= 740) {
  console.log("Very Good Credit");
} else if (creditScore >= 670) {
  console.log("Good Credit");
} else if (creditScore >= 580) {
  console.log("Fair Credit");
} else {
  console.log("Poor Credit");
}

//22. Loan approval rules
let income = 4000;
let creditScore1 = 700;

if (income >= 5000 && creditScore1 >= 750) {
  console.log("Loan Approved - Premium");
} else if (income >= 3000 && creditScore1 >= 650) {
  console.log("Loan Approved");
} else {
  console.log("Loan Rejected");
}

//23. Membership tiers
let points1 = 1200;

if (points1 >= 5000) {
  console.log("Platinum Member");
} else if (points1 >= 2000) {
  console.log("Gold Member");
} else if (points1 >= 1000) {
  console.log("Silver Member");
} else {
  console.log("Bronze Member");
}

//24. Shipping zones
let country = "Kenya";

if (country === "Somalia") {
  console.log("Zone 1 - Local Shipping");
} else if (country === "Kenya" || country === "Ethiopia") {
  console.log("Zone 2 - Regional Shipping");
} else {
  console.log("Zone 3 - International Shipping");
}

//25. Insurance risk levels
let age2 = 22;

if (age2 < 25) {
  console.log("High Risk");
} else if (age2 <= 60) {
  console.log("Medium Risk");
} else {
  console.log("Higher Risk - Senior Category");
}

//26. Server response status categories
let statusCode = 404;

if (statusCode >= 200 && statusCode < 300) {
  console.log("Success");
} else if (statusCode >= 300 && statusCode < 400) {
  console.log("Redirection");
} else if (statusCode >= 400 && statusCode < 500) {
  console.log("Client Error");
} else if (statusCode >= 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

//27. Student scholarship eligibility
let gpa = 3.6;
let income1 = 1500;

if (gpa >= 3.8 && income1 < 2000) {
  console.log("Full Scholarship");
} else if (gpa >= 3.5) {
  console.log("Partial Scholarship");
} else if (gpa >= 3.0) {
  console.log("Eligible for Financial Aid");
} else {
  console.log("Not Eligible");
}

//28. Fitness categories
let bmi = 27;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal Weight");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

//29. Traffic light system
let light = "yellow";

if (light === "green") {
  console.log("Go");
} else if (light === "yellow") {
  console.log("Slow Down");
} else if (light === "red") {
  console.log("Stop");
} else {
  console.log("Invalid Light");
}

//30. Order priority levels
let orderAmount = 1200;

if (orderAmount >= 1000) {
  console.log("High Priority Order");
} else if (orderAmount >= 500) {
  console.log("Medium Priority Order");
} else {
  console.log("Standard Priority");
}
