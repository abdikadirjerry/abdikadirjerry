const processArray = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i]);
    console.log(result);
  }
};

const doubleNumber = (num) => {
  return num * 2;
};

const squareNumber = (num) => {
  return num * num;
};

processArray([1, 2, 3], doubleNumber);
processArray([1, 2, 3], squareNumber);
