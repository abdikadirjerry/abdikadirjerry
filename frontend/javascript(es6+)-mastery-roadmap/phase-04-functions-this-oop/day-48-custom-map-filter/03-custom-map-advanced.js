// 03-custom-map-advanced.js

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

const nums = [10, 20, 30];

const result = customMap(nums, (value, index) => {
  return `${index}: ${value}`;
});

console.log(result);

/*
🧠 Advanced:
callback(value, index, array)
*/
