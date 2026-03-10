// 13. Print every element in the array
let numbers = [4, 9, 2, 7, 5, 8];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 14. Find the largest number
let number = [4, 9, 2, 7, 5, 8];
let largest = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}
console.log(largest);

// 15. Calculate sum of array numbers
let arr1 = [4, 9, 2, 7, 5, 8];
let count1 = 0;

for (let i = 0; i < arr1.length; i++) {
    count1 += arr1[i];
}
console.log(count1);

// 16. Count numbers greater than 5
let numbers1 = [4, 9, 2, 7, 5, 8];
let counts1 = 0;

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 5) {
        counts1 ++
    }
}
console.log(counts1);
