// Problem 6 — Remove Duplicates
const numbers = [1, 2, 2, 3, 4, 4, 5];
let duplicate = [];

for (let i = 0; i < numbers.length; i++) {
    if (!duplicate.includes(numbers[i])) {
        duplicate.push(numbers[i])
    }
}
console.log(duplicate);