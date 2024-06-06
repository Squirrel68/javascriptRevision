// 1. bien trong javascript co the luu tru tat ca cac kieu du lieu
let number = 1;
let string = "Hello";
let boolean = true;
let array = [1, 2, 3];
let object = { name: "Alice", age: 20 };
let date = new Date();
let func = function () {
  return "Hello";
};
let nullValue = null;
let undefinedValue = undefined;

// 2. const, var, let
const PI = 3.14;
try {
  PI = 3.14159;
} catch (e) {
  console.log(e.message); // Assignment to constant variable.
}

for (let i = 0; i < 3; i++) {
  var varVariable = "var";
  let letVariable = "let";
  console.log(i); // 0, 1, 2
}
console.log(varVariable); // var
try {
  console.log(letVariable);
} catch (e) {
  console.log(e.message); // letVariable is not defined
}
