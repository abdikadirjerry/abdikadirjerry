// ============================================
// 03-dynamic-typing.js
// ============================================

// ===============================
// 🟢 Easy (1–8)
// ===============================

let x = 10;
x = "10";

let y = true;
y = 1;

let z = "Hello";
z = false;

let a = null;
a = "null";

let b = undefined;
b = 0;

let c = 5;
c = null;

let d = "100";
d = 100;

let e = false;
e = "false";

// ===============================
// 🟡 Intermediate (9–15)
// ===============================

let multi = 5;
multi = "five";
multi = true;
multi = null;

let numStr = 20;
numStr = String(numStr);

let strToNum = "30";
strToNum = Number(strToNum);

console.log(Number(true));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("false"));