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
