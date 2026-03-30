// Explain the output using lexical scope

var x = 1;

function outer() {
  var x = 2;

  function inner() {
    console.log(x); // 2
  }

  inner();
}

outer();

// Explanation:
// - 'inner' is defined inside 'outer'
// - It has access to 'outer' variables due to lexical scope
// - So it prints x = 2, not global x = 1
