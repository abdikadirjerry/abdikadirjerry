// 02-manual-partial.js

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const sayHello = partial(greet, "Hello");

console.log(sayHello("Najio"));

/*
🧠 Build your own partial function
*/
