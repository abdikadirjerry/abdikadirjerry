// 04-constructor-functions.js

function User(name) {
  this.name = name;
}

const u1 = new User("Najio");

// Arrow ❌
const UserArrow = (name) => {
  this.name = name;
};

// const u2 = new UserArrow("Ali"); // Error
