// 01-sequential-execution.js

function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Finished ${name}`);
      resolve();
    }, delay);
  });
}

// Sequential execution using async/await
async function runSequential() {
  await task("Task 1", 1000);
  await task("Task 2", 1000);
  await task("Task 3", 1000);
}

runSequential();

/*
🧠 Pattern:
- Runs step by step
- Next starts ONLY after previous finishes

Use Case:
✔ Dependent operations
✔ API chaining
*/
