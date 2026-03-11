console.log("=== EASY ===");

// 1
function login(username) {
  if (username === undefined) username = "guest";
  console.log("User logged in as:", username);
}

// 2
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 3
function formatUsername(username) {
  return username.toUpperCase();
}

console.log("=== INTERMEDIATE ===");

// 4
function cartTotal() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 5
function passwordStrength(password) {
  if (password.length < 6) return "weak";
  if (password.length < 10) return "medium";
  return "strong";
}

// 6
function formatEmail(email) {
  if (email.indexOf("@") !== -1) return email;
  return "Invalid email";
}

