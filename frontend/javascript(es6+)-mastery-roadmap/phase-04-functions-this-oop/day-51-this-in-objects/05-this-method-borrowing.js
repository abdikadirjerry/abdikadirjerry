// 05-this-method-borrowing.js

const person1 = {
  name: "Najio",
};

const person2 = {
  name: "Ali",
};

function greet(age) {
  console.log(`Hello, I'm ${this.name} and I'm ${age} years old`);
}

// call
greet.call(person1, 22);

// apply
greet.apply(person2, [25]);

// bind
const greetNajio = greet.bind(person1);
greetNajio(30);
