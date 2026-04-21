// 01-basic-this.js

const user = {
  name: "Najio",
  age: 22,

  greet: function () {
    console.log("Hello, my name is " + this.name);
  },

  getAge: function () {
    return this.age;
  },
};

user.greet(); // Hello, my name is Najio
console.log(user.getAge()); // 22
