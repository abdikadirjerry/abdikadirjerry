const greetUser = (name, callback) => {
  console.log("Hello " + name);
  callback();
};

const userInputName = () => {
  console.log("Welcome!");
};

greetUser("Jerry", userInputName);
