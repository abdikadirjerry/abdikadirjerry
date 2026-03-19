// Example 1: Safe property access
const user = {
  name: "Ali",
  age: 20,
};

if (user.email) {
  console.log(user.email.toLowerCase());
} else {
  console.log("Email not found");
}

// Example 2: Add missing property
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.year);

// Example 3: Check nested property
const person = {
  name: "Sara",
  address: {
    city: "Hargeisa",
  },
};

if (person.address.country) {
  console.log(person.address.country.toUpperCase());
} else {
  console.log("Country not available");
}

// Example 4: Provide correct arguments
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2, 3));
