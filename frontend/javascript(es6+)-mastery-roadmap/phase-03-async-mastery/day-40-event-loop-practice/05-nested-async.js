// 05-nested-async.js

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");

/*
❓ Predict carefully
*/

// Output:
// Start
// End
// Promise 1
// Timeout 1
// Promise inside Timeout