// Problem 5

function getData() {
  return new Promise((resolve) => setTimeout(() => resolve("DATA"), 1000));
}

async function run() {
  const data = getData(); // ❌ bug
  console.log(data);
}

run();

// ❓ Fix the bug + expected output
