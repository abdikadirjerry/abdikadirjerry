// challenge 1
const person = {
  name: "ahmed",
  age: 25,
  phone: 12349876,
};

person.phone = 123456789;

console.log(person);


// challenge 2
const student = {
  name: "mohamed",
  age: 22,
  isGraduate: true,
};

student.phone = 123456789;

console.log(student);


// challenge 3
const book = {
  title: "think fast and slow",
  author: "john de",
  pages: 254,
  isAvailable: true,
};

delete book.isAvailable;

console.log(book);
