// Challenge 1 — Extract name and age
const user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

const { name, age } = user;

console.log(name);
console.log(age);

// Challenge 2 — Rename variable
const person = {
  name: "Sara",
  age: 22,
};

const { name: userName } = person;

console.log(userName);

// Challenge 3 — Extract nested property
const student = {
  name: "Omar",
  address: {
    city: "Hargeisa",
    country: "Somalia",
  },
};

const {
  address: { city },
} = student;

console.log(city);
