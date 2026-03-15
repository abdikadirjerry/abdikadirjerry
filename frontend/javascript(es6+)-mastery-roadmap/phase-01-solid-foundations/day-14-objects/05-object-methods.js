// challenge 1
const student = {
  name: "mohamed",
  age: 20,
  greet: function () {
    console.log("Hello " + this.name);
  },
};

student.greet();


// challenge 2
const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 250,

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  },
};

console.log(book.info());


// challenge 3
const calc = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  },
};


console.log(calc.add(2, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 5));
console.log(calc.divide(10, 2));
console.log(calc.divide(5, 0));
