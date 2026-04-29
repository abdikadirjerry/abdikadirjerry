// 04-immutability.js

const user = {
  name: "Najio",
  score: 0,
};

function increaseScore(obj) {
  return {
    ...obj,
    score: obj.score + 10,
  };
}

const updatedUser = increaseScore(user);

console.log(user.score); // 0
console.log(updatedUser.score); // 10
