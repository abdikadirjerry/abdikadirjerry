// Problem 4 — Reverse a String (Without .reverse())
const text = "hello";
let reverse = "";

for (let i = text.length -1 ; i >= 0; i--) {
    reverse += text[i];
}
console.log(reverse);