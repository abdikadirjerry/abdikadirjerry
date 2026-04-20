// 04-partial-vs-currying.js

// Currying
const addCurried = (a) => (b) => a + b;

// Partial
function add(a, b) {
  return a + b;
}

const addPartial = (b) => add(5, b);

console.log(addCurried(5)(3)); // 8
console.log(addPartial(3)); // 8

/*
🧠 Difference:
Currying → structure
Partial → usage
*/
