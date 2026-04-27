// 03-instance-methods.js

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
  }
}

const acc = new BankAccount("Najio", 1000);

acc.deposit(200);
acc.withdraw(100);

console.log(acc.balance);
