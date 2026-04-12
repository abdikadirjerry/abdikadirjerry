// 05-retry-pattern.js

function fakeApi() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7;

    setTimeout(() => {
      success ? resolve("Success ✅") : reject("Failed ❌");
    }, 500);
  });
}

async function retry(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await fn();
      console.log(result);
      return;
    } catch (err) {
      console.log(`Retry ${i + 1} failed`);
    }
  }
  console.log("All retries failed ❌");
}

retry(fakeApi, 5);

/*
🧠 Use Case:
✔ API retries
✔ Network failures
✔ Resilience systems
*/
