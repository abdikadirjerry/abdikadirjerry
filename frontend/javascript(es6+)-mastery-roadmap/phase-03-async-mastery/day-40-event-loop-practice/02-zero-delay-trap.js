// 02-zero-delay-trap.js

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

/*
❓ Predict:
Does Timeout 1 always come before Timeout 2?
WHY?
*/

// Output:
// Start
// End
// Timeout 1
// Timeout 2

// YES → order is preserved (FIFO queue)
