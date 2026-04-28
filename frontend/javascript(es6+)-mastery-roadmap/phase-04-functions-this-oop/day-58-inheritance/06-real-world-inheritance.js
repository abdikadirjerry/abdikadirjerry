// 06-real-world-inheritance.js

class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(this.name + " logged in");
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(this.name + " deleted " + user.name);
  }
}

const u1 = new User("Ali");
const admin = new Admin("Najio");

admin.login();
admin.deleteUser(u1);
