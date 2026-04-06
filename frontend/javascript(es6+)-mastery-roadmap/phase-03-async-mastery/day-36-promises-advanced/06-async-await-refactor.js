// Async/Await Refactor

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data"), 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data + " processed"), 1000);
  });
}

async function run() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
