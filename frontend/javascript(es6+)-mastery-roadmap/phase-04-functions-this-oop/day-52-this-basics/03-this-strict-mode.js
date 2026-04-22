// 03-this-strict-mode.js

"use strict";

function show() {
  console.log(this);
}

show(); // undefined
