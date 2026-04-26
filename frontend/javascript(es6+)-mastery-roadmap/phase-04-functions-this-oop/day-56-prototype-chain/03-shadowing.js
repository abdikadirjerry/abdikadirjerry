// 03-shadowing.js

const animal = {
  sound: "Some sound",
};

const dog = {
  sound: "Bark",
};

dog.__proto__ = animal;

console.log(dog.sound); // Bark (shadowing)
