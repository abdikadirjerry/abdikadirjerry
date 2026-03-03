function changeName(obj) {
  obj.name = "Changed";
}

let user = { name: "Original" };

changeName(user);

console.log(user.name);