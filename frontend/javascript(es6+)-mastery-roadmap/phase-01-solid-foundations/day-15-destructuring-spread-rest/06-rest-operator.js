// Challenge 1 — Extract first and rest
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

// Challenge 2 — Object rest
const user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

const { name, ...others } = user;

console.log(name);
console.log(others);

// Challenge 3 — Function with rest
function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
