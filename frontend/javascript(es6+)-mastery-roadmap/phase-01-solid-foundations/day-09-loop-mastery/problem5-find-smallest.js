// Problem 5 — Find the Smallest Number
const num = [45, 12, 78, 3, 19];
let smallest = num[0];

for (let i = 0; i < num.length; i++) {
    if (num[i] < smallest) {
        smallest = num[i];
    }
}

console.log(smallest);