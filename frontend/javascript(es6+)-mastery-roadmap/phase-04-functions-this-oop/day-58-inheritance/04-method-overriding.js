// 04-method-overriding.js

class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d1 = new Dog();

d1.speak();
