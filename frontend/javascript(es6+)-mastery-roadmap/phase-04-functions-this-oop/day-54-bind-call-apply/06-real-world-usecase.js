// 06-real-world-usecase.js

const user = {
  name: "Najio",

  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

// Problem
setTimeout(user.greet, 1000); // undefined

// Fix with bind
setTimeout(user.greet.bind(user), 1000);
