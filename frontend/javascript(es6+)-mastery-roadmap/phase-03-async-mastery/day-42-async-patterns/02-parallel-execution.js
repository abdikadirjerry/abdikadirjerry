// 02-parallel-execution.js

function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Finished ${name}`);
      resolve();
    }, delay);
  });
}

async function runParallel() {
  await Promise.all([
    task("Task 1", 2000),
    task("Task 2", 1000),
    task("Task 3", 1500),
  ]);
}

runParallel();

/*
🧠 Pattern:
- Runs all tasks at the same time
- Faster than sequential

Use Case:
✔ Fetch multiple APIs
✔ Independent operations
*/
