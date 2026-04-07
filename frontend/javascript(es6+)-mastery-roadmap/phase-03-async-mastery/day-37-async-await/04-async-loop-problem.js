// Async Loop Problem

function delay(num) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num), 1000);
  });
}

async function wrongLoop() {
  console.log("Wrong Loop:");

  [1, 2, 3].forEach(async (num) => {
    const result = await delay(num);
    console.log(result);
  });
}

async function correctLoop() {
  console.log("Correct Loop:");

  for (const num of [1, 2, 3]) {
    const result = await delay(num);
    console.log(result);
  }
}

wrongLoop();

setTimeout(() => {
  correctLoop();
}, 4000);
