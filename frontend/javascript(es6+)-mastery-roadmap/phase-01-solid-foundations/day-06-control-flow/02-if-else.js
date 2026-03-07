/*
=====================================
01 — if else (30)
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

//2. Check if number even or odd
let num = 27;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number")
}

//3. Check if score pass or fail
let score = 87;

if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed")
}

//4. Check if number positive or negative
let numb = 7;

if (numb > 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

//5. Check if temperature hot or cold
let temperature = 32;

if (temperature >= 30) {
  console.log("Hot temperature");
} else {
  console.log("Cold temperature");
}

//6. Check if password correct or wrong
let password = "1234567";
let correctPassword = "1234567";

if (password === correctPassword) {
  console.log("Correct password");
} else {
  console.log("Incorrect password");
}

//7. Check if item in stock or out of stock
let items = 21;

if (items > 0) {
  console.log("There's items left");
} else {
  console.log("Items out of stock");
}

//8. Check if user logged in or guest
let user = true

if (user) {
  console.log("Logged in");
} else {
  console.log("Guest");
}

//9. Check if number > 50 or <= 50
let num1 = 50;

if (num1 > 50) {
  console.log("Number is greater than 50");
} else {
  console.log("Number is less than or equal to 50")
}

//10. Check if day is weekend or weekday
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's a weekend");
} else {
  console.log("It's a weekday");
}


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

//11. Check if number divisible by 2
let num2 = 2;

if (num2 % 2 === 0) {
    console.log("Number is divisible by 2");
} else {
    console.log("Number is not divisible by 2");
}

// 12. Check if price > 100 → discount
let price = 133;

if (price > 100) {
    console.log("You get a 10% discount");
} else {
    console.log("You Don't get a discount")
}

// 13. Check if user admin → show panel
let isAdmin = true;

if (isAdmin) {
    console.log("Show panel")
} else {
    console.log("not shown admin panel")
}

// 14. Check if age < 13 → child
let userAge = 16;

if (userAge < 13) {
    console.log("Child");
} else {
    console.log("adult");
}

// 15. Check if score > 90 → excellent
let userScore = 57;

if (userScore > 90) {
    console.log("Excellent");
} else {
    console.log("Not bad");
}

// 16. Check if cart empty
let cart = 0;

if (cart === 0) {
    console.log("Cart are empty");
} else {
    console.log("Cart has items");
}

// 17. Check if username matches
let storedUsername = "Jerry"
let enteredUsername = "Jerry"

if (enteredUsername === storedUsername) {
    console.log("Username matches")
} else {
    console.log("Username is not matches")
}

// 18. Check if number > 0
let number = 2;

if (number > 0) {
    console.log("Number is greater than 0");
} else {
    console.log("Number is less than 0");
}

// 19. Check if salary > 10000
let salary = 12000;

if (salary > 10000) {
    console.log("You're salary is greater than 10000");
} else {
    console.log("You're salary is 10000 or less");
}

// 20. Check if temperature freezing
let temperature1 = 9;

if (temperature1 <= 0) {
    console.log("Temperature is freezing");
} else {
    console.log("Temperature is not freezing")
}


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

//21.Check if student passed exam
let studentScore = 100

if (studentScore >= 50) {
    console.log("Passed")
} else {
    console.log("Failed")
}

//22. Check if login success
let isLogin = true;

if (isLogin) {
    console.log("Login Success full");
} else {
    console.log("Login failed");
}

//23. Check if user banned
let userStatus = "banned";

if (userStatus === "banned") {
    console.log("User banned");
} else {
    console.log("User is not banned");
}

//24. Check if payment completed
let payment = true;

if (payment) {
    console.log("Payment Successfully");
} else {
    console.log("Payment not successful");
}

//25. Check if item qualifies for free shipping
let item = 12;

if (item >= 10) {
    console.log("It's free for shipping");
} else {
    console.log("It's not free for shipping");
}

//26. Check if user verified email
let isEmailVerified = true;

if (isEmailVerified) {
    console.log("Email is verified");
} else {
    console.log("Email is not verified");
}

//27. Check if password strong
let userPassword = "!$_password"

if (userPassword.includes("!")) {
    console.log("You're password is strong");
} else {
    console.log("You're password is weak")
}
//28. Check if number multiple of 7
let number2 = 21;

if (number2 % 7 === 0) {
    console.log("Number is multiple of 7");
} else {
    console.log("Number is not multiple of 7");
}

//29. Check if order > 500 for discount
let order = 750;

if (order > 500) {
  console.log("You get a 25% discount");
} else {
  console.log("No discount");
}

//30. Check if user premium member
let userPremium = true;

if (userPremium === true) {
    console.log("User is premium member");
} else {
    console.log("User is not a premium member")
}
