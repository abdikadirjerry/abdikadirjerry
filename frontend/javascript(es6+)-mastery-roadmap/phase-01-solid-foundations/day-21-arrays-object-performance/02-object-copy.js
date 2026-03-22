//  Challenge 1 — Shallow Copy Test
const user = { name: "Ali", age: 25 };
const shallowCopy = Object.assign({}, user);
shallowCopy.name = "Omar";
// Result: user.name is still "Ali". Works for top-level properties.

//  Challenge 2 — Nested Object Problem
const userNested = {
  name: "Ali",
  address: { city: "Hargeisa" },
};
const copyNested = Object.assign({}, userNested);
copyNested.address.city = "Berbera";

/* WHY: original also changes because Object.assign only copies the 
  REFERENCE to the nested 'address' object, not the object itself. 
  Both variables now point to the same memory location for 'address'.
*/
console.log("Original City:", userNested.address.city); // "Berbera"

//  Challenge 3 — Deep Copy Fix
const deepCopy = JSON.parse(JSON.stringify(userNested));
deepCopy.address.city = "Mogadishu";
console.log("Original remains:", userNested.address.city); // "Berbera"
