// 03-super-keyword.js

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
}

const d1 = new Dog("Buddy", "Husky");

console.log(d1.name, d1.breed);
