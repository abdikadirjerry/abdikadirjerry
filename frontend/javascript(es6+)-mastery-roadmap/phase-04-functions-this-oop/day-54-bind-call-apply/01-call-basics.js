// 01-call-basics.js

const user = {
  name: "Najio",
};

function greet(age, country) {
  console.log(`Hello, I'm ${this.name}, ${age} years old from ${country}`);
}

greet.call(user, 22, "Somaliland");
