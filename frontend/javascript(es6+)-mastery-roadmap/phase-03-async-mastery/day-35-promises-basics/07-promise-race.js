// Challenge 7 — Promise.race()

const slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));

const fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast]).then(console.log);
