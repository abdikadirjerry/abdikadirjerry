// 04-multiple-promises.js

console.log("Start");

Promise.resolve().then(() => {
  console.log("P1");
});

Promise.resolve().then(() => {
  console.log("P2");
});

Promise.resolve().then(() => {
  console.log("P3");
});

console.log("End");

/*
❓ Predict Output
*/

// Output:
// Start
// End
// P1
// P2
// P3
