// Parallel vs Sequential

function task(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, time);
  });
}

// Sequential
async function sequential() {
  console.time("Sequential");

  await task("A", 1000);
  await task("B", 1000);
  await task("C", 1000);

  console.timeEnd("Sequential");
}

// Parallel
async function parallel() {
  console.time("Parallel");

  await Promise.all([task("A", 1000), task("B", 1000), task("C", 1000)]);

  console.timeEnd("Parallel");
}

sequential().then(parallel);
