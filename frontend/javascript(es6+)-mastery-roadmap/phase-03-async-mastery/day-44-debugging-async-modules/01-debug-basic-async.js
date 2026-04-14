// 01-debug-basic-async.js

console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 0);

console.log("End");

/*
🧠 Debug Insight:
Output:
Start → End → Async task

Reason:
setTimeout goes to callback queue
*/
