// 05-custom-filter-basic.js

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

const result = customFilter(num, (n) => n > 2);

console.log(result);
