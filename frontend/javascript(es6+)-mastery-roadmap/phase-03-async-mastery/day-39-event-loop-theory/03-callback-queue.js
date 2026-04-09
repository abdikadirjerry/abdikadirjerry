// 03-callback-queue.js

console.log("Start");

setTimeout(() => {
  console.log("Callback from queue");
}, 0);

console.log("End");

/*
Even with 0ms delay, it DOES NOT run immediately.

Why?
Because:
- It goes to Callback Queue
- Event Loop waits until Call Stack is empty

Output:
Start
End
Callback from queue
*/
