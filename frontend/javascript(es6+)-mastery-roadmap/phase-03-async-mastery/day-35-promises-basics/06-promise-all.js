// Challenge 6 — Promise.all()

const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));

const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));

const p3 = new Promise((resolve) => setTimeout(() => resolve("Third"), 3000));

Promise.all([p1, p2, p3]).then(console.log);
