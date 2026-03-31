// Challenge 2: Nested Functions

function greet() {
  console.log("Hello");

  function sayName() {
    console.log("My name is Najio");

    function sayAge() {
      console.log("I am 22 years old");
    }

    sayAge();
  }

  sayName();
}

greet();

/*
Goal: Understand how nested functions are pushed into the call stack
*/
