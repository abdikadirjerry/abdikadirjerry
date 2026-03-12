// Function Scope Example

function greetUser() {
  let message = "Hello JavaScript";

  console.log(message); // accessible here
}

greetUser();

console.log(message);
// This would cause an error because message is inside the function
