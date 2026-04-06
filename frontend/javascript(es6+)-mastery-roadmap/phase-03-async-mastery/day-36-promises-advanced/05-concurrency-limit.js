// Concurrency Limit

const tasks = [
  () => new Promise((r) => setTimeout(() => r("Task 1"), 1000)),
  () => new Promise((r) => setTimeout(() => r("Task 2"), 1000)),
  () => new Promise((r) => setTimeout(() => r("Task 3"), 1000)),
  () => new Promise((r) => setTimeout(() => r("Task 4"), 1000)),
];

async function runWithLimit(taskFns, limit) {
  const results = [];
  const executing = [];

  for (const taskFn of taskFns) {
    const p = taskFn().then((res) => {
      results.push(res);
      executing.splice(executing.indexOf(p), 1);
    });

    executing.push(p);

    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}

runWithLimit(tasks, 2).then(console.log);
