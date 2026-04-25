// 05-hasOwnProperty.js

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi");
};

const u1 = new User("Najio");

console.log(u1.hasOwnProperty("name")); // true
console.log(u1.hasOwnProperty("sayHi")); // false
