// 02-missing-await.js

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function run() {
  const data = getData(); // ❌ missing await
  console.log(data);
}

run();

/*
❌ Output:
Promise {<pending>}

✅ Fix:
const data = await getData();
*/
