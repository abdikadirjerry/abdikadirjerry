// Problem 3 — Count Vowels in a String
const word = "javascript";
let count = 0;

for (let i = 1; i <= word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    count++;
}
}
console.log(count);
