// 04-borrowing-methods.js

const person1 = {
  name: "Najio",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const person2 = {
  name: "Ali",
};

// Borrow method
person1.greet.call(person2);
