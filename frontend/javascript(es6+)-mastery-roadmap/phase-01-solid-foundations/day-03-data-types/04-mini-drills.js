// ============================================
// 04-mini-drills.js
// ============================================

// ===============================
// 🟢 Easy (1–6)
// ===============================

let p1 = 10;
let p2 = "JS";
let p3 = true;
let p4 = null;
let p5 = undefined;

console.log(typeof p1, typeof p2, typeof p3, typeof p4, typeof p5);

p1 = "ten";
p3 = 0;

let n = null;
let u;

// ===============================
// 🟡 Intermediate (7–12)
// ===============================

console.log(Number("50") * 2);
console.log(String(false));
console.log(Boolean(null));
console.log(Boolean("true"));
console.log(Boolean(0));
console.log(typeof ("5" * 2));

// ===============================
// 🔴 Advanced (13–18)
// ===============================

let crazy = 1;
crazy = "1";
crazy = true;
crazy = null;
crazy = undefined;

console.log(typeof (5 + "5"));
console.log(typeof (5 - "5"));
console.log(null == false);
console.log(undefined == false);
console.log(typeof typeof null);
