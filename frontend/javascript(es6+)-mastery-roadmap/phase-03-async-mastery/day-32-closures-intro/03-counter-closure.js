/*
03 — Counter using Closure
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
