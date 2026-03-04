// ============================================
// 01-primitives-typeof.js
// ============================================

// ===============================
// 🟢 Easy (1–10)
// ===============================

// 1
let age = 25;
console.log(typeof age);

// 2
let name = "Jerry";
console.log(typeof name);

// 3
let isStudent = true;
console.log(typeof isStudent);

// 4
let decimal = 3.14;
console.log(typeof decimal);

// 5
let emptyString = "";
console.log(typeof emptyString);

// 6
let zero = 0;
console.log(typeof zero);

// 7
let notAssigned;
console.log(typeof notAssigned);

// 8
let nothing = null;
console.log(typeof nothing); // historical JS bug → object

// 9
let notANumber = NaN;
console.log(typeof notANumber);

// 10
let stringTrue = "true";
console.log(typeof stringTrue);

// ===============================
// 🟡 Intermediate (11–18)
// ===============================

// 11
let num = 50;
console.log(typeof num);
num = String(num);
console.log(typeof num);

// 12
let strNum = "100";
console.log(typeof strNum);

// 13
let inf = Infinity;
console.log(typeof inf);

// 14
let negInf = -Infinity;
console.log(typeof negInf);

// 15
console.log(typeof null);
console.log(typeof undefined);

// 16
let space = " ";
console.log(typeof space);

// 17
let boolFalse = false;
console.log(typeof boolFalse);

// 18
let big = BigInt(10);
console.log(typeof big);

// ===============================
// 🔴 Advanced (19–25)
// ===============================

// 19
let v1 = 1;
let v2 = "JS";
let v3 = true;
let v4 = null;
let v5 = undefined;
console.log(typeof v1, typeof v2, typeof v3, typeof v4, typeof v5);

// 20
let dynamic = 10;
console.log(typeof dynamic);
dynamic = "ten";
console.log(typeof dynamic);
dynamic = true;
console.log(typeof dynamic);
dynamic = undefined;
console.log(typeof dynamic);

// 21
let weird = 0 / 0;
console.log(weird, typeof weird);

// 22
console.log(typeof (true + ""));

// 23
console.log(typeof ("5" - 2));

// 24
console.log(typeof ("5" + 2));

// 25
let doubleType = typeof typeof 5;
console.log(doubleType);
