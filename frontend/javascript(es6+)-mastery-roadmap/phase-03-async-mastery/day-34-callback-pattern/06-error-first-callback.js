const divideNumbers = (a, b, callback) => {
  if (b === 0) {
    return callback("cannot divide by zero", null);
  }

  let result = a / b;
  callback(null, result);
};

divideNumbers(10, 2, (error, result) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log(result);
  }
});
