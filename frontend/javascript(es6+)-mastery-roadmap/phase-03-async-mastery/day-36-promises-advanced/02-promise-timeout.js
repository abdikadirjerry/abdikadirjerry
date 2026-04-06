// Promise Timeout

function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), 3000);
  });
}

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Timeout!"), ms);
  });

  return Promise.race([promise, timeout]);
}

withTimeout(slowTask(), 2000).then(console.log).catch(console.error);
