// 1. Global Scope
let globalVariable = "global";
function globalFunction() {
  console.log(globalVariable); // global
}
globalFunction();

// 2. Function Scope
function functionScope() {
  let functionVariable = "function";
  console.log(functionVariable); // function
  var functionVar = "function var";
}
try {
  console.log(functionVariable);
} catch (error) {
  console.log(error); // ReferenceError: functionVariable is not defined
}
functionScope();

// 3. Block Scope
{
  let blockVariable = "block";
  console.log(blockVariable); // block
}

try {
  console.log(blockVariable);
} catch (error) {
  console.log(error); // ReferenceError: blockVariable is not defined
}
