// 02-this-vs-arrow.js

const user = {
  name: "Najio",

  regularFunction: function () {
    console.log("Regular:", this.name);
  },

  arrowFunction: () => {
    console.log("Arrow:", this.name);
  },
};

user.regularFunction(); // Najio
user.arrowFunction(); // undefined (or window/global)
