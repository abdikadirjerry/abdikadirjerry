// 9. Sum numbers from 1 to 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// 10. Sum even numbers from 1 to 20
let sumEven = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(sumEven);

// 11. Count how many numbers are divisible by 4 between 1 and 50
let countNum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0){
        countNum++
    }
}
console.log(`${countNum} Numbers are divisible by 4`);

// 12. Count how many numbers are divisible by 4 between 1 and 50
let multiply = 1;

for (let i = 1; i <= 5; i++){
    multiply *= i;
}
console.log(multiply);