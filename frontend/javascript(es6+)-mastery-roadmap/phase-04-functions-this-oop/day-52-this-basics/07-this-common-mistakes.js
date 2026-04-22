// 07-this-common-mistakes.js

const user = {
  name: "Najio",

  greet: function () {
    setTimeout(function () {
      console.log(this.name); // undefined
    }, 1000);
  },
};

user.greet();

// ✅ Fix:

setTimeout(() => {
  console.log(this.name); // Najio
}, 1000);
