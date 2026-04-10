// 08-build-your-own.js

/*
🎯 TASK:

Create code that outputs EXACTLY:

1
2
3
4

Rules:
- Must use:
  ✔ console.log
  ✔ setTimeout
  ✔ Promise
- Order must be controlled using Event Loop knowledge
*/

// ✍️ Your solution below:

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

setTimeout(() => {
  console.log("4");
}, 0);

console.log("3");
