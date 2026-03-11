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

console.log("=== ADVANCED ===");

// 7
function getStats(...numbers) {
  let sum = 0;
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }

  let average = sum / numbers.length;
  return { min: min, max: max, sum: sum, average: average };
}

// 8
function removeDuplicates(...numbers) {
  let unique = [];
  for (let i = 0; i < numbers.length; i++) {
    if (unique.indexOf(numbers[i]) === -1) {
      unique.push(numbers[i]);
    }
  }
  return unique;
}

// 9
function numberSorter(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}