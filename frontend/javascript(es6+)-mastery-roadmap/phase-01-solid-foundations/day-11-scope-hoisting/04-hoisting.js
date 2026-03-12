// Hoisting Example

console.log(a); // undefined (hoisted)

var a = 10;

console.log(a); // 10

// Function hoisting

sayHello();

function sayHello() {
  console.log("Hello from hoisted function!");
}
