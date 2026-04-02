/*
02 — Private Variable using Closure
*/

function createUser() {
  let name = "Ali"; // private

  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
}

const user = createUser();

console.log(user.getName()); // Ali

user.setName("Ahmed");

console.log(user.getName()); // Ahmed