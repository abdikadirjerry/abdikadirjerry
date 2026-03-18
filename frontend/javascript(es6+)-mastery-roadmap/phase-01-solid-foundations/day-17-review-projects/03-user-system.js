const users = [
  { name: "Ali", age: 25, isActive: true },
  { name: "Omar", age: 17, isActive: false },
  { name: "Sara", age: 30, isActive: true },
  { name: "Fatima", age: 15, isActive: true },
];

let active = 0;
let inactive = 0;
let adult = 0;
let activeNames = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  if (user.isActive) {
    active++;
    activeNames.push(user.name);
  } else {
    inactive++;
  }

  if (user.age >= 18) {
    adult++;
  }
}

console.log(`Active Users: ${active}`);
console.log(`Inactive Users: ${inactive}`);
console.log(`Adults: ${adult}`);
console.log("Names of Active Users:");

for (let i = 0; i < activeNames.length; i++) {
  console.log(`- ${activeNames[i]}`);
}