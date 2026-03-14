// challenge 1
const number = [1, 2, 3, 4];
const double = number.map(num => num * 2);

console.log(double);

// challenge 2
const numbers = [1, 2, 3];
const convert = numbers.map(num => num + "");

console.log(convert);

// challenge 3
const names = [{ name: "Ali" }, { name: "Zara" }, { name: "Omar" }];
const extract = names.map(name => name.name);

console.log(extract);
