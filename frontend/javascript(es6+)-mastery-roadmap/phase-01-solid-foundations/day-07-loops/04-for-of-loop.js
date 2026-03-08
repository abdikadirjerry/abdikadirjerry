/*
=====================================
04 — For Of Loop (12)
Focus: arrays, strings
=====================================
*/

// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Loop through array of colors
let colors = ["red", "blue", "green", "yellow"];
for (const color of colors) {
  console.log(color);
}

//2. Loop through array of numbers
let numbers = [10, 20, 30, 40, 50];
for (const number of numbers) {
  console.log(number);
}

//3. Loop through string characters
let word = "hello";
for (const char of word) {
  console.log(char);
}

//4. Loop through list of cities
let cities = ["London", "Paris", "New York", "Tokyo"];
for (const city of cities) {
  console.log(city);
}


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Sum numbers in array
let nums = [5, 10, 15, 20];
let sum = 0;
for (const n of nums) {
  sum += n;
}
console.log(sum);

//6. Find longest word
let words = ["apple", "banana", "strawberry", "kiwi"];
let longest = "";
for (const w of words) {
  if (w.length > longest.length) {
    longest = w;
  }
}
console.log(longest);

//7. Count vowels in string
let sentence = "This is an example sentence";
let vowels = "aeiouAEIOU";
let count = 0;
for (const ch of sentence) {
  if (vowels.includes(ch)) {
    count++;
  }
}
console.log(count);

//8. Filter numbers greater than 50
let values = [12, 65, 34, 78, 23, 90];
let filtered = [];
for (const val of values) {
  if (val > 50) {
    filtered.push(val);
  }
}
console.log(filtered);


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Count duplicates in array
let items = [1, 2, 3, 2, 4, 1, 5];
let duplicates = {};
for (const item of items) {
  duplicates[item] = (duplicates[item] || 0) + 1;
}
for (const key in duplicates) {
  if (duplicates[key] > 1) {
    console.log(`${key} appears ${duplicates[key]} times`);
  }
}

//10. Reverse words in sentence
let sentence1 = "hello world this is JS";
let wordsArray = sentence1.split(" ");
let reversedSentence = [];
for (const w of wordsArray) {
  reversedSentence.unshift(w);
}
console.log(reversedSentence.join(" "));

//11. Build uppercase list from array
let fruits = ["apple", "banana", "mango"];
let upperFruits = [];
for (const f of fruits) {
  upperFruits.push(f.toUpperCase());
}
console.log(upperFruits);

//12. Create a new array with squared numbers
let numbers2 = [2, 3, 4, 5];
let squared = [];
for (const n of numbers2) {
  squared.push(n * n);
}
console.log(squared);