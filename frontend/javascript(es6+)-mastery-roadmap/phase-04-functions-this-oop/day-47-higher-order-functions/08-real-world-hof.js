// 08-real-world-hof.js

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "John", age: 17 },
];

// Get adult users
const adults = users.filter((user) => user.age >= 18);

// Get names
const names = adults.map((user) => user.name);

console.log(names);

/*
🧠 Real flow:
filter → map → result
*/
