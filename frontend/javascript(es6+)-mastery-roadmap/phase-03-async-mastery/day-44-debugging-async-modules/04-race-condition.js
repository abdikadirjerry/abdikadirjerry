// 04-race-condition.js

let balance = 100;

async function withdraw(amount) {
  const current = balance;

  await new Promise((r) => setTimeout(r, 100));

  balance = current - amount;
}

async function run() {
  await Promise.all([withdraw(30), withdraw(50)]);

  console.log("Final Balance:", balance);
}

run();

/*
🧠 Problem:
Race condition → incorrect result

Fix:
Locking / sequential execution
*/
