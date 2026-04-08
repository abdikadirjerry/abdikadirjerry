// Async Error Handling

function fetchData() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("API failed"), 1000);
  });
}

async function run() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Caught async error:", error);
  }
}

run();
