// Predict the output and explain why

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError

// Explanation:
// - 'var a' is hoisted and initialized as undefined
// - 'let b' is hoisted but in TDZ (Temporal Dead Zone)
// - Accessing 'b' before initialization throws ReferenceError

let b = 10;
