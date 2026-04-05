// Challenge 8 — Advanced Flow

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ali" });
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order1", "Order2"]);
    }, 1000);
  });
}

fetchUser()
  .then((user) => fetchOrders(user.id))
  .then((orders) => console.log(orders))
  .catch(console.error);
