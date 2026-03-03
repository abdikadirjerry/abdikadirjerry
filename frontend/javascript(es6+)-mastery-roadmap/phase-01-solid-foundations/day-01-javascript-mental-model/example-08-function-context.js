let message = "Global";

function test() {
  let message = "Local";
  console.log(message);
}

test();
console.log(message);