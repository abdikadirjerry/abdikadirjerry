// 06-real-world-comparison.js

const team = {
  name: "Dev Team",
  members: ["Ali", "Ahmed", "Najio"],

  printMembers: function () {
    this.members.forEach(function (member) {
      console.log(this.name + " - " + member); // ❌ undefined
    });
  },
};

// ✅ Fix with arrow:

const team = {
  name: "Dev Team",
  members: ["Ali", "Ahmed", "Najio"],

  printMembers: function () {
    this.members.forEach((member) => {
      console.log(this.name + " - " + member); // ✅ works
    });
  }
};

team.printMembers();
