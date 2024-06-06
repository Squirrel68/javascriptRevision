x = 3; // not cause error

function myFunction() {
  "use strict";
  try {
    y = 3; // cause error
  } catch (e) {
    console.log(e); // ReferenceError: y is not defined
  }
}

myFunction();
