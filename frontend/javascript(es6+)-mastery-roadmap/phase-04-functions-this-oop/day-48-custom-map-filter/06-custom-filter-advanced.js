// 06-custom-filter-advanced.js

function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 17 },
  { name: "John", age: 25 },
];

const adults = customFilter(users, (user) => user.age >= 18);

console.log(adults);

/*
🧠 Advanced:
supports index + array
real-world usage
*/
