// 04-custom-filter.js

function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const num = [1, 2, 3, 4];

const evens = customFilter(num, (n) => n % 2 === 0);

console.log(evens);
