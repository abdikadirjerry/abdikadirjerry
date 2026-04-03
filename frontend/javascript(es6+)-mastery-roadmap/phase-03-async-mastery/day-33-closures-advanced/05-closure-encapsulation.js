"use strict";

/*
05 — Closure Encapsulation Pattern
*/

function createUserProfile(username) {
  let password = "12345"; // private
  let loginAttempts = 0;

  function validatePassword(input) {
    return input === password;
  }

  return {
    login(input) {
      if (validatePassword(input)) {
        console.log(`${username} logged in`);
        loginAttempts = 0;
      } else {
        loginAttempts++;
        console.log("Wrong password. Attempts:", loginAttempts);
      }
    },
    resetPassword(newPass) {
      password = newPass;
      console.log("Password updated");
    },
  };
}

const user = createUserProfile("Ali");

user.login("wrong");
user.login("12345");
user.resetPassword("abc");
user.login("abc");
