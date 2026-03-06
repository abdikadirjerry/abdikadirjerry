/*
=====================================
01 — Boolean Coercion (30)
Operators: + - * / % **
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===")

// 1. Boolean(0)
console.log(Boolean(0));

// 2. Boolean(1)
console.log(Boolean(1));

// 3. Boolean("")
console.log(Boolean(""));

// 4. Boolean("hello")
console.log(Boolean("hello"));

// 5. Boolean(null)
console.log(Boolean(null));

// 6. Boolean(undefined)
console.log(Boolean(undefined));

// 7. Boolean(NaN)
console.log(Boolean(NaN));

// 8. Boolean([])
console.log(Boolean([]));

// 9. Boolean({})
console.log(Boolean({}));

// 10. Boolean("false")
console.log(Boolean("false"));


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===");

// 11. !!0
console.log(!!0);

// 12. !!1
console.log(!!1);

// 13. !!""
console.log(!!"");

// 14. !!"text"
console.log(!!"text");

// 15. !!null
console.log(!!null);

// 16. !!undefined
console.log(!!undefined);

// 17. !!NaN
console.log(!!NaN);

// 18. !![]
console.log(!![]);

// 19. !!{}
console.log(!!{});

// 20. !!"0"
console.log(!!"0");


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===");

// 21. Boolean(" ")
console.log(Boolean(" "));

// 22. Boolean("true")
console.log(Boolean("true"));

// 23. Boolean("0")
console.log(Boolean("0"));

// 24. Boolean([0])
console.log(Boolean([0]));

// 25. Boolean({a:1})
console.log(Boolean({a:1}));

// 26. Boolean(Infinity)
console.log(Boolean(Infinity));

// 27. Boolean(-Infinity)
console.log(Boolean(-Infinity));

// 28. Boolean("null")
console.log(Boolean("null"));

// 29. Boolean("undefined")
console.log(Boolean("undefined"));

// 30. Boolean(function(){})
console.log(Boolean(function(){}));