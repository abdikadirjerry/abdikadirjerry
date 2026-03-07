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
  default:
    console.log("Unknown direction");
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


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

//11. Menu selection
let menu = 2;

switch (menu) {
  case 1:
    console.log("Burger");
    break;
  case 2:
    console.log("Pizza");
    break;
  case 3:
    console.log("Pasta");
    break;
  default:
    console.log("Invalid selection");
}

//12. Game difficulty
let difficulty = "hard";

switch (difficulty) {
  case "easy":
    console.log("Enemy strength low");
    break;
  case "medium":
    console.log("Enemy strength moderate");
    break;
  case "hard":
    console.log("Enemy strength high");
    break;
  default:
    console.log("Invalid difficulty");
}

//13. Payment method
let payment = "card";

switch (payment) {
  case "cash":
    console.log("Pay with cash");
    break;
  case "card":
    console.log("Pay with credit card");
    break;
  case "paypal":
    console.log("Pay using PayPal");
    break;
  default:
    console.log("Invalid payment method");
}

//14. HTTP status code messages
let status = 404;

switch (status) {
  case 200:
    console.log("OK");
    break;
  case 404:
    console.log("Page Not Found");
    break;
  case 500:
    console.log("Server Error");
    break;
  default:
    console.log("Unknown Status");
}

//15. Movie rating
let rating = "PG";

switch (rating) {
  case "G":
    console.log("General Audience");
    break;
  case "PG":
    console.log("Parental Guidance");
    break;
  case "R":
    console.log("Restricted");
    break;
  default:
    console.log("Unknown rating");
}

//16. Shipping option
let shipping = "express";

switch (shipping) {
  case "standard":
    console.log("Delivery in 5-7 days");
    break;

  case "express":
    console.log("Delivery in 2-3 days");
    break;

  case "overnight":
    console.log("Delivery next day");
    break;

  default:
    console.log("Invalid shipping option");
}

//17. Notification type
let notification = "email";

switch (notification) {
  case "email":
    console.log("Sending Email Notification");
    break;

  case "sms":
    console.log("Sending SMS Notification");
    break;

  case "push":
    console.log("Sending Push Notification");
    break;

  default:
    console.log("Unknown Notification Type");
}

//18. App theme selection
let theme = "dark";

switch (theme) {
  case "light":
    console.log("Light theme activated");
    break;

  case "dark":
    console.log("Dark theme activated");
    break;

  case "system":
    console.log("Using system default theme");
    break;

  default:
    console.log("Theme not recognized");
}

//19 Currency symbol
let currency = "USD";

switch (currency) {
  case "USD":
    console.log("$");
    break;

  case "EUR":
    console.log("€");
    break;

  case "GBP":
    console.log("£");
    break;

  case "JPY":
    console.log("¥");
    break;

  default:
    console.log("Unknown currency");
}

//20. Time of day greeting
let timeOfDay = "morning";

switch (timeOfDay) {
  case "morning":
    console.log("Good Morning");
    break;

  case "afternoon":
    console.log("Good Afternoon");
    break;

  case "evening":
    console.log("Good Evening");
    break;

  case "night":
    console.log("Good Night");
    break;

  default:
    console.log("Hello");
}


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

// 21.Command system
let command = "restart";

switch (command) {
  case "start":
    console.log("System is starting...");
    break;

  case "stop":
    console.log("System is stopping...");
    break;

  case "restart":
    console.log("System is restarting...");
    break;

  default:
    console.log("Unknown command");
}

//22. File type handling
let fileType = "png";

switch (fileType) {
  case "jpg":
  case "png":
    console.log("Open with image viewer");
    break;

  case "pdf":
    console.log("Open with PDF reader");
    break;

  case "mp3":
    console.log("Open with music player");
    break;

  default:
    console.log("Unsupported file type");
}

//23. Error code messages
let errorCode = 403;

switch (errorCode) {
  case 400:
    console.log("Bad Request");
    break;

  case 401:
    console.log("Unauthorized");
    break;

  case 403:
    console.log("Forbidden");
    break;

  case 404:
    console.log("Not Found");
    break;

  case 500:
    console.log("Server Error");
    break;

  default:
    console.log("Unknown Error");
}

//24. User permission levels
let userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Full system access");
    break;

  case "editor":
    console.log("Can edit and publish content");
    break;

  case "viewer":
    console.log("Read-only access");
    break;

  default:
    console.log("No permissions assigned");
}

//25. Device type detection
let device = "mobile";

switch (device) {
  case "mobile":
    console.log("Mobile layout activated");
    break;

  case "tablet":
    console.log("Tablet layout activated");
    break;

  case "desktop":
    console.log("Desktop layout activated");
    break;

  default:
    console.log("Unknown device type");
}

//26. Discount code system
let code = "SAVE20";

switch (code) {
  case "SAVE10":
    console.log("10% discount applied");
    break;

  case "SAVE20":
    console.log("20% discount applied");
    break;

  case "FREESHIP":
    console.log("Free shipping applied");
    break;

  default:
    console.log("Invalid discount code");
}

//27. Chat message type
let messageType = "image";

switch (messageType) {
  case "text":
    console.log("Display text message");
    break;

  case "image":
    console.log("Display image message");
    break;

  case "video":
    console.log("Display video message");
    break;

  case "file":
    console.log("Display file attachment");
    break;

  default:
    console.log("Unknown message type");
}

//28. Game action system
let action = "attack";

switch (action) {
  case "attack":
    console.log("Player attacks enemy");
    break;

  case "defend":
    console.log("Player defends");
    break;

  case "heal":
    console.log("Player restores health");
    break;

  default:
    console.log("Invalid action");
}

//29. Order status system
let orderStatus = "shipped";

switch (orderStatus) {
  case "pending":
    console.log("Order received");
    break;

  case "processing":
    console.log("Order is being prepared");
    break;

  case "shipped":
    console.log("Order is on the way");
    break;

  case "delivered":
    console.log("Order delivered");
    break;

  case "cancelled":
    console.log("Order cancelled");
    break;

  default:
    console.log("Unknown order status");
}

//30. Ticket priority levels
let priority = "high";

switch (priority) {
  case "low":
    console.log("Resolve within 72 hours");
    break;

  case "medium":
    console.log("Resolve within 24 hours");
    break;

  case "high":
    console.log("Resolve immediately");
    break;

  case "critical":
    console.log("Emergency response required");
    break;

  default:
    console.log("Unknown priority level");
}