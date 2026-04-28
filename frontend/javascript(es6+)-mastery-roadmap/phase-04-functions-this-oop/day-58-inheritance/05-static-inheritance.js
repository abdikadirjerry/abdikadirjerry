// 05-static-inheritance.js

class Animal {
  static info() {
    console.log("This is Animal class");
  }
}

class Dog extends Animal {}

Dog.info();
