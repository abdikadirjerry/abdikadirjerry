// 06-class-vs-constructor.js

// Constructor Function
function UserFunc(name) {
  this.name = name;
}

UserFunc.prototype.greet = function () {
  console.log("Hello " + this.name);
};

// Class
class UserClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const u1 = new UserFunc("Najio");
const u2 = new UserClass("Ali");

u1.greet();
u2.greet();
