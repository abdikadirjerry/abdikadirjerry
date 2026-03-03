let original = { name: "Ali" };

let copy = { ...original };

copy.name = "Ahmed";

console.log(original.name); // Ali
console.log(copy.name);     // Ahmed