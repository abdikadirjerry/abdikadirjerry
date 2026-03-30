// What will be printed and why?

console.log(foo); // function foo() { return "Hello"; }

var foo = 100;

function foo() {
  return "Hello";
}

console.log(foo); // 100

// Explanation:
// - Function declarations are hoisted before variables
// - So initially, 'foo' refers to the function
// - Later, 'foo = 100' overwrites it
