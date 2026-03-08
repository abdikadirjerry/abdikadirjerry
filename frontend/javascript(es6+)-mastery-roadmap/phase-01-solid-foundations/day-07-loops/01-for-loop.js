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


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Loop through an array
let arr = ["mango", "avocado", "banana"];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

//6. Find the largest number
let numbers = [12, 45, 7, 23, 89, 34];

let largest = numbers[0];

for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
} 

console.log(largest);

//7. Reverse a string manually

let word = "developer";
let reversed = "";

for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i];
}
console.log(reversed)

let js = "javascript";
let count = 0;

for (let i = 0; i <= js.length; i++) {
    if (js[i] === "a" || js[i] === "e" || js[i] === "i" || js[i] === "0" || js[i] === "u") {
        count++
    }
}
console.log(count);


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Generate a star triangle
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

//10. Search for a value in an array
let arrStore = [4, 7, 12, 19, 3];

for (let i = 0; i <= arrStore.length; i++) {
    if (arrStore[i] === 19){
        console.log("found 19 at index", i);
    }
}

//11. Calculate factorial
let factorial = 1;
let number = 6;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of", number, "is", factorial);

//12. Implement FizzBuzz
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}