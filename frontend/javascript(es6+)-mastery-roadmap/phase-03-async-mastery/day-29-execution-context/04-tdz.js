// What happens here and why?

{
  // console.log(a); // ❌ ReferenceError
  let a = 20;

  console.log(a); // 20
}

// Explanation:
// - 'let a' is hoisted but not initialized
// - It stays in TDZ until the line where it's declared
// - Accessing it before declaration causes ReferenceError
