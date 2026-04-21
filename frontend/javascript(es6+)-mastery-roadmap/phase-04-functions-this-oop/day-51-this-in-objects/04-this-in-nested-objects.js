// 04-this-in-nested-objects.js

const user = {
  name: "Najio",

  address: {
    city: "Hargeisa",

    getCity: function () {
      console.log("City:", this.city);
    },
  },
};

user.address.getCity(); // Hargeisa

getName: function () {
  const inner = () => {
    console.log(this.name);
  };

  inner(); // Najio
}