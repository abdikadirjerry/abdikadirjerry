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

// 1. "5" + 2
console.log("5" + 2);

// 2. "5" - 2
console.log("5" - 2);

// 3. "5" * "2"
console.log("5" * "2");

// 4. "5" / "2"
console.log("5" / "2");

// 5. true + 1
console.log(true + 1);

// 6. false + 1
console.log(false + 1);

// 7. true + "1"
console.log(true + "1");

// 8. "10" - true
console.log("10" - true);

// 9. "10" + true
console.log("10" + true);

// 10. [] + []
console.log([] + []);


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

// 11. [] + {}
console.log([] + {});

// 12. {} + []
console.log({} + []);

// 13. [1] + [2]
console.log([1] + [2]);

// 14. [1] + 1
console.log([1] + 1);

// 15. 1 + [1]
console.log(1 + [1]);

// 16. "5" - - "2"
console.log("5" - - "2");

// 17. "5" + - "2"
console.log("5" + - "2");

// 18. "5" - + "2"
console.log("5" - + "2");

// 19. +true
console.log(+true);

// 20. +false
console.log(+false);