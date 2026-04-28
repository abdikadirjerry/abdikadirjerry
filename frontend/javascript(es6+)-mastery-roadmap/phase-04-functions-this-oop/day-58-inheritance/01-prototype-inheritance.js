// 01-prototype-inheritance.js

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}

// inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d1 = new Dog("Buddy", "Husky");

d1.eat();
