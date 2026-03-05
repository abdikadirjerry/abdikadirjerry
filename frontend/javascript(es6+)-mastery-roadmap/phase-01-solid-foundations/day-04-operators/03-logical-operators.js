/*
=====================================
03 — Logical Operators
&& || !
=====================================
*/


// ===============================
// 🟢 Easy (1–10)
// ===============================

console.log("=== EASY ===")

console.log(true && true)
console.log(true && false)
console.log(false || true)
console.log(false || false)
console.log(!true)
console.log(!false)

console.log(5 > 2 && 10 > 3)
console.log(3 > 10 || 5 < 8)

console.log((7 > 2) && (9 > 5))
console.log((1 > 3) || (4 < 6))


// ===============================
// 🟡 Intermediate (11–20)
// ===============================

console.log("=== INTERMEDIATE ===")

let age = 20
let hasID = true
console.log(age > 18 && hasID)

let isAdmin = false
let isModerator = true
console.log(isAdmin || isModerator)

let number = 6
console.log(number > 0 && number % 2 === 0)

let num = -5
console.log(num < 0 || num === 0)

let password = "abc123456"
console.log(password.length > 8)

let score = 75
console.log(score >= 50 && score <= 100)

let temperature = 45
console.log(temperature < 0 || temperature > 40)

let username = "user"
let pass = "1234"
console.log(username !== "" && pass !== "")

console.log(10 > 5 && 20 > 15)

let active = true
console.log(!active)


