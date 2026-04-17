// 03-custom-map.js

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

const num = [1, 2, 3];

const doubled = customMap(num, (n) => n * 2);

console.log(doubled);

/*
🧠 Recreating built-in map
*/
