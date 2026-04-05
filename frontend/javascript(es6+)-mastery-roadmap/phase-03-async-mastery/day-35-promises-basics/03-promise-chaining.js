// Challenge 3 — Promise Chaining

Promise.resolve(10)
  .then((num) => num * 2)
  .then((num) => num + 5)
  .then((result) => console.log(result));
