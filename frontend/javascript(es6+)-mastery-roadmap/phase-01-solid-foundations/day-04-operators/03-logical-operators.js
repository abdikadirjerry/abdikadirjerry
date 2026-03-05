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


// ===============================
// 🔴 Advanced (21–30)
// ===============================

console.log("=== ADVANCED ===")

let isLoggedIn = true
let admin = false
console.log(isLoggedIn && admin)

let personAge = 25
console.log(personAge > 18 && personAge < 60)

let examScore = 60
let attendance = 80
console.log(examScore >= 50 && attendance >= 75)

let a = 5, b = 7, c = 2
console.log(a > b || b > c)

let banned = false
console.log(!banned)

let x = 15
console.log((x > 10 && x < 20) || (x > 50 && x < 60))

let price = 120
let member = true
console.log(price > 100 && member)

let guest = true
console.log(guest || isLoggedIn)

console.log(a === b && b === c)

console.log(!(a > b))