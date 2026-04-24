// 03-arguments-object.js

function regularFunc() {
  console.log(arguments);
}

regularFunc(1, 2, 3);

// Arrow Function
const arrowFunc = () => {
  // console.log(arguments); ❌ Error
};

arrowFunc(1, 2, 3);
