// 02-constructor-prototype.js

function User(name) {
  this.name = name;
}

const u1 = new User("Najio");

console.log(User.prototype);
console.log(u1.__proto__ === User.prototype); // true
