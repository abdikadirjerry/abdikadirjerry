// 03-partial-application.js

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add10 = add(10);

console.log(add10(5)); // 15
console.log(add10(20)); // 30

/*
🧠 Partial Application:
Fix some arguments early
*/
