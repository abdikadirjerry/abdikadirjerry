// 05-this-in-constructor.js

function User(name) {
  this.name = name;
}

const u1 = new User("Najio");
console.log(u1.name);
