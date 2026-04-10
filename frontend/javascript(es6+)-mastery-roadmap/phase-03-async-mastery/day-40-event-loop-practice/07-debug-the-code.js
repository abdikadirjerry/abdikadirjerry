// 07-debug-the-code.js

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ❌ Student expected:
// Start → Timeout → Promise → End

// ❓ Fix understanding (no code change needed)

// Correct Output:
// Start
// End
// Promise
// Timeout

// Problem:
// misunderstanding of event loop priority
