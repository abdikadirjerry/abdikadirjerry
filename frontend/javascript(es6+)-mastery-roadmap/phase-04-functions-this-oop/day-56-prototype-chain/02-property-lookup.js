// 02-property-lookup.js

const animal = {
  eats: true,
};

const dog = {
  barks: true,
};

dog.__proto__ = animal;

console.log(dog.barks); // own
console.log(dog.eats); // from prototype
