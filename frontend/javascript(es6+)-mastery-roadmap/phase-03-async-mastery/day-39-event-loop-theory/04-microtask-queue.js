// 04-microtask-queue.js

console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

setTimeout(() => {
  console.log("Macrotask (setTimeout)");
}, 0);

console.log("End");

/*
Microtasks (Promises) have HIGHER priority than macrotasks

Execution Order:
1. Call Stack
2. Microtask Queue (Promises)
3. Callback Queue (setTimeout)

Output:
Start
End
Microtask 1
Microtask 2
Macrotask (setTimeout)
*/
