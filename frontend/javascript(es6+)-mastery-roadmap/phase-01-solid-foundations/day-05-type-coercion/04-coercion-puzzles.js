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


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

// 21. +"5"
console.log(+"5");

// 22. +"hello"
console.log(+"hello");

// 23. Number("10px")
console.log(Number("10px"));

// 24. parseInt("10px")
console.log(parseInt("10px"));

// 25. "5" + null
console.log("5" + null);

// 26. "5" + undefined
console.log("5" + undefined);

// 27. "5" - null
console.log("5" - null);

// 28. "5" - undefined
console.log("5" - undefined);

// 29. null + 1
console.log(null + 1);

// 30. undefined + 1
console.log(undefined + 1);