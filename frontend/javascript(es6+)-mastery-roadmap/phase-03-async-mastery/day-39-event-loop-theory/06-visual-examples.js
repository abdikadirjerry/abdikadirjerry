// 06-visual-examples.js

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

/*
Think like this:

Call Stack:
A → D

Microtask Queue:
C

Callback Queue:
B

Final Order:
A
D
C
B
*/
