/*
=====================================
01 — For Loop (12)
=====================================
*/


// ===============================
// 🟢 Easy (1–4)
// ===============================

console.log("=== EASY ===");

//1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Display even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(i)
    }
}

//3. Create a multiplication table
for (let i = 6; i <= 6; i++) {
    console.log(i)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }

}

//4. Calculate the sum of numbers
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i

}
console.log(sum);