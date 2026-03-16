// Challenge 1 — Simple template
const name = "Ali";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old`);

// Challenge 2 — Math inside template
const a = 10;
const b = 20;

console.log(`The result is ${a + b}`);

// Challenge 3 — Multi-line message
const message = `
Welcome to JavaScript
This is Day 15
You are doing great
`;

console.log(message);

// Challenge 4 — Function in template
function greet(user) {
  return `Hello ${user}`;
}

console.log(`${greet("Omar")} welcome to the course`);
