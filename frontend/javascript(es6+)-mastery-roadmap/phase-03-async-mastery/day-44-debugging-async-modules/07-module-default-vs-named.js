// 07-module-default-vs-named.js

// Named export
export const age = 22;

// Default export
export default function sayHello() {
  console.log("Hello!");
}

/*
Import:

import sayHello, { age } from "./file.js";
*/
