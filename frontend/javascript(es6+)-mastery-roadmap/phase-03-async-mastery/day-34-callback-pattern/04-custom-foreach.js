const customForEach = (Array, callback) => {
  for (let i = 0; i < Array.length; i++) {
    callback(Array[i]);
  }
};

customForEach([1, 2, 3], (num) => {
  console.log(num);
});
