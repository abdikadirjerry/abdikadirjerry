// Example 1: Infinite loop
let i = 0;

while (i < 5) {
  console.log(i);
  // missing i++
}

// Example 2: Skipping last element
const nums = [10, 20, 30, 40];

for (let i = 0; i < nums.length - 1; i++) {
  console.log(nums[i]);
}

// Example 3: Wrong loop direction
for (let i = 5; i >= 0; i++) {
  console.log(i);
}

// Example 4: Nested loop mistake
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; i++) {
    // wrong increment
    console.log(i, j);
  }
}
