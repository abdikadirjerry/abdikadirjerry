// 02-apply-basics.js

const user = {
  name: "Najio",
};

function greet(age, country) {
  console.log(`Hello, I'm ${this.name}, ${age} years old from ${country}`);
}

greet.apply(user, [22, "Somaliland"]);
