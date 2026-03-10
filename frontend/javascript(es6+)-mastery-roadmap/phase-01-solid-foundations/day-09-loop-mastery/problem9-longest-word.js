// Problem 9 — Find the Longest Word
const words = ["cat", "elephant", "dog", "tiger"];

let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}

console.log(longest);