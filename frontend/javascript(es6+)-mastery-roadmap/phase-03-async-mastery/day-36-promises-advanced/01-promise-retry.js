// Retry Promise Example

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7;

    setTimeout(() => {
      success ? resolve("Success!") : reject("Failed!");
    }, 500);
  });
}

function retry(fn, retries) {
  return fn().catch((err) => {
    if (retries > 0) {
      console.log("Retrying...");
      return retry(fn, retries - 1);
    }
    throw err;
  });
}

retry(fakeApiCall, 3).then(console.log).catch(console.error);
