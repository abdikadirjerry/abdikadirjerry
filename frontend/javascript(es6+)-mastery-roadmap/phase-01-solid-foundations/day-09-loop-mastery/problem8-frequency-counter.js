// Problem 8 — Frequency Counter
const letters = ["a","b","a","c","b","a"];
let letterObj = {}

for (let i = 0; i < letters.length; i++) {
    let char = letters[i];

    if (letterObj[char]){
        letterObj[char]++
    } else {
        letterObj[char] = 1;
    }
}
console.log(letterObj);