// 05-getters-setters.js

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      console.log("Name too short");
      return;
    }
    this._name = value;
  }
}

const u1 = new User("Najio");

console.log(u1.name);

u1.name = "A"; // invalid
u1.name = "Ali"; // valid
