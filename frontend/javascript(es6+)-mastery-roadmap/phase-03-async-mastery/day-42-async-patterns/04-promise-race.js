// 04-promise-race.js

const slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 2000));

const fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast]).then((result) => {
  console.log(result);
});

/*
🧠 Behavior:
- First resolved/rejected wins

Output:
Fast
*/
