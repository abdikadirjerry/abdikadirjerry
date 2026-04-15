// Problem 9

console.log("Start");

async function test() {
  console.log("Inside");

  setTimeout(() => console.log("Timeout"), 0);

  await Promise.resolve();

  console.log("After await");
}

test();

console.log("End");

// ❓ Predict output
