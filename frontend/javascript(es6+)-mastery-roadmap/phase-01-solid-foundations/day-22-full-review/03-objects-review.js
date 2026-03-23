const users = [
  { name: "Ali", age: 25 },
  { name: "Omar", age: 17 },
];

// Print all names
for (let i = 0; i < users.length; i++) {
  console.log("Name:", users[i].name);
}

// Count adults
let adultCount = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adultCount++;
  }
}

console.log("Adults:", adultCount);

// Find specific user
let foundUser = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Ali") {
    foundUser = users[i];
    break;
  }
}

console.log("Found User:", foundUser);
