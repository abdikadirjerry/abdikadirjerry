console.log("=== EASY ===");
// 1
function greetUser(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello Guest");
  }
}

greetUser("Abdikadir");

// 2
function calculatePrice(price, tax = 0.05) {
  return (price = price + price * tax);
}
console.log(calculatePrice(100));

// 3
function rectangleArea(width = 1, height = 1) {
  return width * height;
}
console.log(rectangleArea(10));

console.log("=== intermediate ===");
// 4
function createUser(username, role = "user", isActive = true) {
  let obj = { username, role, isActive };
  return obj;
}

console.log(createUser("abdikadir"));

// 5
function applyDiscount(price, discount = 10) {
  price = price - (price * discount) / 100;
  return price;
}

console.log(applyDiscount(100));

// 6
function sendMessage(message, sender = "System", priority = "Normal") {
  console.log(`[${sender} - ${priority}]: ${message}`);
}

sendMessage("server restarting");

