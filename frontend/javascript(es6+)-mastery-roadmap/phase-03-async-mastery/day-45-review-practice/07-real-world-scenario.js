// Problem 10

function fakeFetch(name, delay) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, delay),
  );
}

async function run() {
  const a = fakeFetch("A", 1000);
  const b = fakeFetch("B", 500);

  const r1 = await a;
  const r2 = await b;

  console.log("Done");
}

run();

/*
❓ Questions:
1. Output order?
2. Is this optimal?
3. How to improve?
*/
