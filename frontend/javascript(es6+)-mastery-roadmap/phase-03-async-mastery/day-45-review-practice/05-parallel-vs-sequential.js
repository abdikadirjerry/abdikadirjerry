// Problem 7

async function a() {
  return "A";
}

async function b() {
  return "B";
}

async function run() {
  const r1 = await a();
  const r2 = await b();
  console.log(r1, r2);
}

run();

// ❓ Is this parallel or sequential?

// Problem 8

async function runFast() {
  const [r1, r2] = await Promise.all([a(), b()]);
  console.log(r1, r2);
}

runFast();

// ❓ Difference from above?
