// 02-setTimeout-arguments.js

function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

setTimeout(greet, 1000, "Najio", 22);

/*
🧠 Trick:
- setTimeout can pass arguments to function
*/
