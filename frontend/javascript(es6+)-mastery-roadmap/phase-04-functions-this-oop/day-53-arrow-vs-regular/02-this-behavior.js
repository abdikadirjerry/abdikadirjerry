// 02-this-behavior.js

const user = {
  name: "Najio",

  regular: function () {
    console.log("Regular:", this.name);
  },

  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

user.regular(); // Najio
user.arrow(); // undefined
