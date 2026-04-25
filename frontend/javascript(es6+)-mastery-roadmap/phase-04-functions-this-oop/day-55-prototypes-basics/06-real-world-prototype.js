// 06-real-world-prototype.js

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds");
    return;
  }
  this.balance -= amount;
};

const acc1 = new BankAccount("Najio", 1000);
const acc2 = new BankAccount("Ali", 500);

acc1.deposit(200);
acc2.withdraw(100);

console.log(acc1.balance);
console.log(acc2.balance);
