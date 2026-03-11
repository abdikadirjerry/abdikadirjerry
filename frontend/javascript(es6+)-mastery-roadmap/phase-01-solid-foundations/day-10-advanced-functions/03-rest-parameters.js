console.log("=== EASY ===");

// 1
function printNumbers(...nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
}

// 2
function countNumbers(...nums) {
  return nums.length;
}

// 3
function findMinNumber(...nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }
  return min;
}

console.log("=== INTERMEDIATE ===");

// 4
function multiplyNumbers(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    result = result * nums[i];
  }
  return result;
}

// 5
function processNumbers(first, ...rest) {
  console.log("First number:", first);
  console.log("Remaining numbers:", rest);
}

// 6
function sumOddNumbers(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) sum += nums[i];
  }
  return sum;
}

