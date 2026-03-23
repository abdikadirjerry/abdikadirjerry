// challenge 1
const numbers = [1, 2, 3];

const newNumber = numbers.map((n) => n * 2);

console.log(newNumber);

// challenge 2
const nums = [1, 2, 3, 4, 5, 6];

const even = nums.filter((n) => n % 2 === 0);
console.log(even);

// challenge 3
const number = [10, 20, 30];

const total = number.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// challenge 4
const number1 = [12, 5, 8, 130, 44];
let largestNumber = number1[0];
for (let i = 0; i < number1.length; i++) {
  if (number1[i] > largestNumber) {
    largestNumber = number1[i];
  }
}
console.log(largestNumber);

// challenge 5
const number2 = [120, 32, 3, 7, 23];
let smallestNumber = number2[0];

for (let i = 0; i < number2.length; i++) {
  if (number2[i] < smallestNumber) {
    smallestNumber = number2[i];
  }
}
console.log(smallestNumber);

// challenge 6
const num = [6, 1, 32, 44, 100, 92, 11, 19];
let greater10 = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] > 10) {
    greater10++;
  }
}
console.log(greater10);

// challenge 7
const numbers1 = [12, 5, 8, 130, 44];
let lessThan50 = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] < 50) {
    lessThan50.push(numbers1[i]);
  }
}

console.log(lessThan50);

// challenge 8
const arr = [33, 12, 3, 4, 45, 32, 41, 22, 38, 27];
let reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log(reverse);

// challenge 9
const num1 = [1, 2, 2, 3, 4, 4, 5];
let removeDuplicates = [];

for (let i = 0; i < num1.length; i++) {
  let num = num1[i];

  if (!removeDuplicates.includes(num)) {
    removeDuplicates.push(num);
  }
}
console.log(removeDuplicates);

// challenge 10
console.log("challenge 10");

const users = [
  { name: "Ali", age: 22, isActive: true, score: 80 },
  { name: "Sara", age: 17, isActive: false, score: 50 },
  { name: "John", age: 25, isActive: true, score: 95 },
  { name: "Ahmed", age: 20, isActive: false, score: 60 },
  { name: "Zara", age: 23, isActive: true, score: 70 },
];

const activeUsers = [];
let totalScore = 0;
let activeCount = 0;
let topUser = users[0];
let adultCount = 0;
let summary = [];
const lowInactiveUsers = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  // Active users
  if (user.isActive) {
    activeUsers.push(user);
    totalScore += user.score;
    activeCount++;
  }

  // Top scorer
  if (user.score > topUser.score) {
    topUser = user;
  }

  // Count adults
  if (user.age >= 18) {
    adultCount++;
  }

  // Summary array
  summary.push(`${user.name} (${user.score})`);

  // Bonus: inactive users with score < 60
  if (!user.isActive && user.score < 60) {
    lowInactiveUsers.push(user);
  }
}

// Average score of active users
const averageScore = totalScore / activeCount;

// Output
console.log("Active Users:", activeUsers);
console.log("Average Score (Active Users):", averageScore);
console.log("Top Scorer:", topUser.name, "-", topUser.score);
console.log("Adult Count:", adultCount);
console.log("Summary:", summary);
console.log("Inactive Users with score < 60:", lowInactiveUsers);

