// Challenge 5: Async vs Call Stack

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

/*
Expected Output:
Start
End
Timeout callback

Goal: Understand event loop vs call stack
*/