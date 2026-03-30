// Trace execution step by step

var x = 10;

function test() {
  console.log(x); // undefined
  var x = 20;
  console.log(x); // 20
}

test();

// Explanation:
// Inside function:
// - 'var x' is hoisted → initialized as undefined
// - First console.log(x) → undefined
// - Then x = 20
// - Second console.log(x) → 20
