// Example 1: Fixed infinite loop
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// Example 2: Correct loop range
const nums = [10, 20, 30, 40];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// Example 3: Correct countdown
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// Example 4: Correct nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
