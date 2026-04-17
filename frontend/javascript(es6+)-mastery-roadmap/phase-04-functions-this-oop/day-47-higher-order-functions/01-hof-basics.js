// 01-hof-basics.js

function greet(name) {
  return `Hello ${name}`;
}

function processUser(fn) {
  return fn("Nacho");
}

console.log(processUser(greet));

/*
🧠 HOF:
Function that takes another function as argument
*/
