// Try/Catch Error Handling

function riskyTask() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Something failed"), 1000);
  });
}

async function run() {
  try {
    const result = await riskyTask();
    console.log(result);
  } catch (error) {
    console.error("Caught Error:", error);
  }
}

run();
