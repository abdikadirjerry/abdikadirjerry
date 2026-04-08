// Retry Logic

function unstableTask() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.6;

    setTimeout(() => {
      success ? resolve("Success") : reject("Failed");
    }, 500);
  });
}

async function retry(fn, retries) {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.log("Retrying...");
      return retry(fn, retries - 1);
    }
    throw error;
  }
}

retry(unstableTask, 3).then(console.log).catch(console.error);
