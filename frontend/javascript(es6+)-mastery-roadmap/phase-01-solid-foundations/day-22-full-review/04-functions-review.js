// Basic Function
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ali"));

// Function with array
function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

console.log(sumArray([10, 20, 30]));

// Callback function
function processUser(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return "Hello " + name;
}

console.log(processUser("Ali", sayHello));
