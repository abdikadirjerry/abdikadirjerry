// 02-class-extends.js

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

class Dog extends Animal {}

const d1 = new Dog("Buddy");

d1.eat();
