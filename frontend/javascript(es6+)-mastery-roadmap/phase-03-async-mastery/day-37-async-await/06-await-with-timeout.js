// Await with Timeout

function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Finished"), 3000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Timeout!"), ms);
  });
}

async function run() {
  try {
    const result = await Promise.race([slowTask(), timeout(2000)]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
