// Challenge 1
const user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

// Get all keys
const keys = Object.keys(user);

console.log(keys);

// Challenge 2
const users = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

// Get all values
const values = Object.values(users);

console.log(values);

// Challenge 3
const user1 = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

for (let key in user1) {
  console.log(key + ": " + user1[key]);
}
