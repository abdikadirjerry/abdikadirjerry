// Challenge 3: Recursion and Call Stack

function countDown(n) {
  console.log(n);

  if (n === 0) {
    return;
  }

  countDown(n - 1);
}

countDown(5);

/*
Goal: See how recursive calls fill the call stack
*/
