const scores = [70, 85, 90, 40, 60, 30, 100];

let sum = 0;
let passed = 0;
let highest = scores[0];
let lowest = scores[0];

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];

  if (scores[i] > highest) {
    highest = scores[i];
  }

  if (scores[i] < lowest) {
    lowest = scores[i];
  }

  if (scores[i] >= 50) {
    passed++;
  }
}

const average = sum / scores.length;

console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passed Students: ${passed}`);