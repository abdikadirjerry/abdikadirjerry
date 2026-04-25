// 04-adding-methods.js

function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const u1 = new User("Najio");
const u2 = new User("Ali");

u1.greet();
u2.greet();
