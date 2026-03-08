/*
=====================================
05 — For In Loop (12)
Focus: objects
=====================================
*/

// ===============================
// 🟢 Easy (1–4)
// ===============================

//1. Print keys
let obj1 = {name: "Alice", age: 25, city: "London"};
for (const key in obj1) {
  console.log(key);
}

//2. Print values
for (const key in obj1) {
  console.log(obj1[key]);
}

//3. Print key:value pairs
for (const key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}

//4. Count number of properties
let countProps = 0;
for (const key in obj1) {
  countProps++;
}
console.log(countProps);


// ===============================
// 🟡 Intermediate (5–8)
// ===============================

console.log("=== INTERMEDIATE ===");

//5. Find property with highest value (numeric)
let obj2 = {a: 10, b: 25, c: 15};
let maxKey = "";
let maxValue = -Infinity;
for (const key in obj2) {
  if (obj2[key] > maxValue) {
    maxValue = obj2[key];
    maxKey = key;
  }
}
console.log(`${maxKey}: ${maxValue}`);

//6. Sum numeric properties
let sum = 0;
for (const key in obj2) {
  sum += obj2[key];
}
console.log(sum);

//7. Filter properties above threshold (e.g., >15)
let filtered = {};
for (const key in obj2) {
  if (obj2[key] > 15) {
    filtered[key] = obj2[key];
  }
}
console.log(filtered);

//8. Create array of keys
let keysArray = [];
for (const key in obj2) {
  keysArray.push(key);
}
console.log(keysArray);


// ===============================
// 🔴 Advanced (9–12)
// ===============================

console.log("=== ADVANCED ===");

//9. Clone object
let original = {x: 1, y: 2, z: 3};
let clone = {};
for (const key in original) {
  clone[key] = original[key];
}
console.log(clone);

//10. Detect empty values
let obj3 = {a: "", b: 0, c: null, d: "hello"};
for (const key in obj3) {
  if (obj3[key] === "" || obj3[key] === null || obj3[key] === undefined) {
    console.log(`${key} is empty`);
  }
}

//11. Build string summary of object
let summary = "";
for (const key in obj1) {
  summary += `${key}: ${obj1[key]}, `;
}
console.log(summary.slice(0, -2)); // remove last comma

//12. Nested object traversal
let nested = {person: {name: "Alice", age: 25}, city: "London"};
for (const key in nested) {
  if (typeof nested[key] === "object") {
    for (const innerKey in nested[key]) {
      console.log(`${innerKey}: ${nested[key][innerKey]}`);
    }
  } else {
    console.log(`${key}: ${nested[key]}`);
  }
}