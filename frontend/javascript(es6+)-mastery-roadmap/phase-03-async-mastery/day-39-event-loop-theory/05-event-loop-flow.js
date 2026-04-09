// 05-event-loop-flow.js

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");

/*
Event Loop Steps:

1. Execute Call Stack
2. Empty Microtask Queue
3. Take one from Callback Queue
4. Repeat

Output:
Start
End
Promise 1
Promise 2
setTimeout
*/
