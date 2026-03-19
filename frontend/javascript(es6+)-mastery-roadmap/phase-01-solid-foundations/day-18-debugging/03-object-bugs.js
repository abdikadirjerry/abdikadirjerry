// Example 1: Undefined property
const user = {
  name: "Ali",
  age: 20,
};

console.log(user.email.toLowerCase());

// Example 2: Wrong property name
const car = {
  brand: "Toyota",
  model: "Corolla",
};

console.log(car.year);

// Example 3: Nested object error
const person = {
  name: "Sara",
  address: {
    city: "Hargeisa",
  },
};

console.log(person.address.country.toUpperCase());

// Example 4: Function inside object bug
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2)); // missing argument
