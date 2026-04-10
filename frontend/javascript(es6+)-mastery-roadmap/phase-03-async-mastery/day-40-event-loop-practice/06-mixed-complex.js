// 06-mixed-complex.js

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

/*
❓ Predict Output
*/

// Output:
// 1
// 5
// 4
// 2
// 3
