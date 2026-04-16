// 02-functions-as-arguments.js

function processUserInput(callback) {
  const name = "Najio";
  callback(name);
}

function greetUser(name) {
  console.log(`Hello ${name}`);
}

processUserInput(greetUser);

/*
🧠 Concept:
Functions can be passed as arguments (callbacks)
*/
