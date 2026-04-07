// Basic Async/Await

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done after 2 seconds"), 2000);
  });
}

async function run() {
  const result = await delay();
  console.log(result);
}

run();
