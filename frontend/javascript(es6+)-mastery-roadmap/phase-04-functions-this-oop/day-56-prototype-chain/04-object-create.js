// 04-object-create.js

const animal = {
  eats: true,
};

const dog = Object.create(animal);

dog.barks = true;

console.log(dog.eats); // true
