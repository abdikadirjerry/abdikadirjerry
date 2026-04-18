// 02-custom-map-basic.js

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

const num = [1, 2, 3];

const result = customMap(num, (n) => n * 2);

console.log(result);
