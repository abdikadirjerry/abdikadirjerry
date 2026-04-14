// 03-unhandled-promise.js

function failTask() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Something went wrong ❌"), 1000);
  });
}

async function run() {
  failTask(); // ❌ no catch
}

run();

/*
🧠 Problem:
Unhandled Promise Rejection

✅ Fix:
try/catch OR .catch()
*/
