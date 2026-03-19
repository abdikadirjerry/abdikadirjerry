// Bug 1
let arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

// Bug 2
let total = 0;
for (let i = 1; i <= 5; i++) {
  total = i;
}
console.log(total);

// Bug 3
const user = { name: "Ali" };
console.log(user.age);
