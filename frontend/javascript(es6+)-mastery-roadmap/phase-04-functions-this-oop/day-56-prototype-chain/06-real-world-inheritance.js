// 06-real-world-inheritance.js

const user = {
  login: function () {
    console.log(this.name + " logged in");
  },
};

const admin = Object.create(user);

admin.name = "Najio";
admin.role = "Admin";

admin.login();
