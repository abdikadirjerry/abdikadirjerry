// 02-constructor-method.js

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const u1 = new User("Najio", 22);
u1.greet();
