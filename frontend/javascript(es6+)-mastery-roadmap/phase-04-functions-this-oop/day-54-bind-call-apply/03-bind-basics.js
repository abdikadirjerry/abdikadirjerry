// 03-bind-basics.js

const user = {
  name: "Najio",
};

function greet(age) {
  console.log(`Hello, I'm ${this.name}, ${age} years old`);
}

const boundGreet = greet.bind(user);

boundGreet(22);
