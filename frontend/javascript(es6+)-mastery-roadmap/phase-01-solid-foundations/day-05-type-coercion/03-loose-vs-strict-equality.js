/*
=====================================
03 — Loose vs Strick equality Coercion (30)
Operators: + - * / % **
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===");
// 1. 5 == "5"
console.log(5 == "5");

// 2. 5 === "5"
console.log(5 === "5");

// 3. 0 == false
console.log(0 == false);

// 4. 0 === false
console.log(0 === false);

// 5. "" == 0
console.log("" == 0);

// 6. "" === 0
console.log("" === 0);

// 7. "10" == 10
console.log("10" == 10);

// 8. "10" === 10
console.log("10" === 10);

// 9. null == undefined
console.log(null == undefined);

// 10. null === undefined
console.log(null === undefined);


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

// 11. "0" == false
console.log("0" == false);

// 12. "0" === false
console.log("0" === false);

// 13. [] == false
console.log([] == false);

// 14. [] === false
console.log([] === false);

// 15. [] == ""
console.log([] == "");

// 16. [] === ""
console.log([] === "");

// 17. [1] == 1
console.log([1] == 1);

// 18. [1] === 1
console.log([1] === 1);

// 19. "true" == true
console.log("true" == true);

// 20. "true" === true
console.log("true" === true);


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

// 21. [1,2] == "1,2"
console.log([1,2] == "1,2");

// 22. [1,2] === "1,2"
console.log([1,2] === "1,2");

// 23. {} == {}
console.log({} == {});

// 24. {} === {}
console.log({} === {});

// 25. NaN == NaN
console.log(NaN == NaN);

// 26. NaN === NaN
console.log(NaN === NaN);

// 27. Infinity == Infinity
console.log(Infinity == Infinity);

// 28. Infinity === Infinity
console.log(Infinity === Infinity);

// 29. false == "false"
console.log(false == "false");

// 30. false === "false"
console.log(false === "false");