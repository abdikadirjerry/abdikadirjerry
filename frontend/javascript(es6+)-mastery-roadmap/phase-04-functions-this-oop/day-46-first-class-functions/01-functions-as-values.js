// 01-functions-as-values.js

function greet() {
  return "Hello!";
}

// Assign function to variable
const sayHello = greet;

console.log(sayHello()); // Hello!

/*
🧠 Concept:
Functions can be stored in variables like numbers or strings
*/
