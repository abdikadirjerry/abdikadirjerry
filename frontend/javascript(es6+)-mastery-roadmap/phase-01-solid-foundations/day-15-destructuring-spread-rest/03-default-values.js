// Challenge 1 — Default age
const user = {
  name: "Ali",
};

const { name, age = 18 } = user;

console.log(name);
console.log(age);

// Challenge 2 — Default country
const person = {
  name: "Ahmed",
};

const { country = "Somalia" } = person;

console.log(country);

// Challenge 3 — Missing property
const student = {
  name: "Fatima",
};

const { grade = "Not Assigned" } = student;

console.log(grade);
