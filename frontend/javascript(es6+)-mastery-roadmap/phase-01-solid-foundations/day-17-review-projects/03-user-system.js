const users = [
  { name: "Ali", age: 25, isActive: true },
  { name: "Omar", age: 17, isActive: false },
  { name: "Sara", age: 30, isActive: true },
  { name: "Fatima", age: 15, isActive: true },
];

let active = 0;
let adult = 0;
let inActive = 0;
let names = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].isActive === true) {
    active += users[i].isActive;
  }

  if (users[i].age >= 18) {
    adult++;
  }

  if (users[i].isActive === false) {
    inActive++;
  }

  if (users[i].isActive === true) {
    names += users[i].name;
  }
}

console.log(`Active Users: ${active}`);
console.log(`Adults: ${adult}`);
console.log(`InActive Users: ${inActive}`);
console.log(`Names of Active Users: ${names}`);
