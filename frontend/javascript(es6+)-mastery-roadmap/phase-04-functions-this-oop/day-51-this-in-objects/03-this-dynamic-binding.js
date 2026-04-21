// 03-this-dynamic-binding.js

const user1 = {
  name: "Ali",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

const user2 = {
  name: "Ahmed",
};

user1.greet(); // Hello Ali

// Borrow method
user2.greet = user1.greet;
user2.greet(); // Hello Ahmed
