// Fix 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Fix 2
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total);

// Fix 3
if (user.age !== undefined) {
  console.log(user.age);
} else {
  console.log("Age not found");
}