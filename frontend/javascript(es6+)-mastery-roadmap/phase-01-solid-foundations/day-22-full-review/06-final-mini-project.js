const students = [
  { name: "Ali", score: 80 },
  { name: "Omar", score: 40 },
  { name: "Sara", score: 90 },
];

// Average score
let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].score;
}

const average = total / students.length;
console.log("Average:", average);

// 🟡 Passed students
const passed = students.filter(function (student) {
  return student.score >= 50;
});

console.log("Passed:", passed);

// Highest score
let highest = students[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].score > highest.score) {
    highest = students[i];
  }
}

console.log("Highest:", highest);

// Names only
const names = students.map(function (student) {
  return student.name;
});

console.log("Names:", names);
