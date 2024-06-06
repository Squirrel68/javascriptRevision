"use strict"; // declare strict mode globally
try {
  x = 3; // cause error
} catch (e) {
  console.log(e); // ReferenceError: x is not defined
}

try {
  x = { p1: 10, p2: 20 };
} catch (e) {
  console.log(e); // ReferenceError: x is not defined
}

try {
  let x = 3.14;
  delete x; // cause error
} catch (e) {
  console.log(e); // SyntaxError: Delete of an unqualified identifier in strict mode.
}
