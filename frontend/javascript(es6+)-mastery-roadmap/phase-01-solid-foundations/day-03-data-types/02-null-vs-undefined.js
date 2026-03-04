// ============================================
// 02-null-vs-undefined.js
// ============================================

// ===============================
// 🟢 Easy (1–8)
// ===============================

// 1
let a;
console.log(a);

// 2
let b = null;
console.log(b);

// 3
console.log(typeof null);

// 4
console.log(typeof undefined);

// 5
console.log(null == undefined);

// 6
console.log(null === undefined);

// 7
let strNull = "null";
console.log(strNull);

// 8
let strUndefined = "undefined";
console.log(strUndefined);

// ===============================
// 🟡 Intermediate (9–15)
// ===============================

// 9
let u;
let n = null;
let empty = "";
console.log(u, n, empty);

// 10
let checkVar;
console.log(checkVar === undefined);

// 11
let changeU;
changeU = null;

// 12
let changeN = null;
changeN = 5;

// 13
console.log(null > 0);

// 14
console.log(null == 0);

// 15
console.log(undefined == 0);

// ===============================
// 🔴 Advanced (16–22)
// ===============================

// 16
console.log(null >= 0);

// 17
console.log(undefined >= 0);

// 18
let manualUndefined = undefined;

// 19
let intentionalNull = null; // used when we want to clear a value intentionally

// 20
let u1;
let u2;
console.log(u1 === u2);

// 21
let n1 = null;
let u3;
console.log(n1 == u3);

// 22
let testVar = null;
console.log(testVar);
testVar = undefined;
console.log(testVar);
