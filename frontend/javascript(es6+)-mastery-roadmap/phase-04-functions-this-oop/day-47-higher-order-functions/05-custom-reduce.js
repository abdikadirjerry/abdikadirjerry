// 05-custom-reduce.js

function customReduce(arr, callback, initial) {
  let accumulator = initial;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}

const num = [1, 2, 3, 4];

const sum = customReduce(num, (acc, curr) => acc + curr, 0);

console.log(sum);
