// 06-this-real-world.js

const bankAccount = {
  owner: "Najio",
  balance: 1000,

  deposit: function (amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  },

  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
  },
};

bankAccount.deposit(500);
bankAccount.withdraw(300);
