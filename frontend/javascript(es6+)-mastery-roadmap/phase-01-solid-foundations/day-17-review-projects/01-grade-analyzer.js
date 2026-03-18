const scores = [70, 85, 90, 40, 60, 30, 100];
let sum = 0;
let passed = 0;
let highest = scores[0];
let lowest = scores[0];
let average = scores[0];

for (let i = 0; i < scores.length; i++) {
  sum += scores[i] / scores.length;
  average = sum;
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
console.log(average);
console.log(highest);
console.log(lowest);
console.log(passed);
