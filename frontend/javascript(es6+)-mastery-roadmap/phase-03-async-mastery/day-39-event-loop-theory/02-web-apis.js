// 02-web-apis.js

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");

/*
Key Concept:

setTimeout is NOT handled by JS engine.
It is handled by Web APIs (browser environment).

Flow:
1. console.log("Start") → Call Stack
2. setTimeout → sent to Web API
3. console.log("End") → Call Stack
4. After 2s → callback goes to Queue

Output:
Start
End
Inside setTimeout
*/
