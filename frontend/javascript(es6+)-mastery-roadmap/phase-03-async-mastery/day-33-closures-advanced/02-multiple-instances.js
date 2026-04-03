"use strict";

/*
02 — Multiple Closure Instances
Each instance has its own memory
*/

function createBankAccount(owner) {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`${owner} balance:`, balance);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return;
      }
      balance -= amount;
      console.log(`${owner} balance:`, balance);
    },
    getBalance() {
      return balance;
    },
  };
}

const user1 = createBankAccount("Ali");
const user2 = createBankAccount("Ahmed");

user1.deposit(100);
user1.withdraw(30);

user2.deposit(200);

console.log("User1 Final:", user1.getBalance());
console.log("User2 Final:", user2.getBalance());
