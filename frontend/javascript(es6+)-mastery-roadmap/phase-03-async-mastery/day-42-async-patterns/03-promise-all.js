// 03-promise-all.js

const p1 = Promise.resolve("Data 1");
const p2 = Promise.resolve("Data 2");
const p3 = Promise.resolve("Data 3");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
🧠 Behavior:
- ALL must succeed
- ONE fails → everything fails

Output:
["Data 1", "Data 2", "Data 3"]
*/
