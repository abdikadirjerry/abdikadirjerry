// Challenge 1 — Clone object
const user = {
  name: "Ali",
  age: 25,
};

const clone = { ...user };

console.log(clone);

// Challenge 2 — Add property
const person = {
  name: "Omar",
};

const updatedPerson = {
  ...person,
  age: 30,
};

console.log(updatedPerson);

// Challenge 3 — Override property
const car = {
  brand: "Toyota",
  year: 2018,
};

const updatedCar = {
  ...car,
  year: 2022,
};

console.log(updatedCar);
