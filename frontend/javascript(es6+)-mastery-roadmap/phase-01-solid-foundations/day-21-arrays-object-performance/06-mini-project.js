const students = [
  { name: "Ali", courses: ["JS", "HTML"] },
  { name: "Omar", courses: ["CSS", "JS"] },
  { name: "Sara", courses: ["HTML"] },
];

//  Task 1 — Count Total Courses
const totalCourses = students.reduce(
  (sum, student) => sum + student.courses.length,
  0,
);
console.log("Total Enrollments:", totalCourses);

//  Task 2 — Find Students in JS
const jsStudents = students
  .filter((s) => s.courses.includes("JS"))
  .map((s) => s.name);
console.log("JS Students:", jsStudents);

//  Task 3 — Course Popularity
const popularity = {};
students.forEach((student) => {
  student.courses.forEach((course) => {
    popularity[course] = (popularity[course] || 0) + 1;
  });
});
console.log("Course Popularity:", popularity);
