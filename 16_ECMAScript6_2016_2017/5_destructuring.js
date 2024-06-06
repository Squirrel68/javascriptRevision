//1. ARRAY DESTRUCTURING
var array = ["first", "second", "third"];

// normal way
var first = array[0];
var second = array[1];
var third = array[2];

// destructuring
var [a, b, c] = array;
console.log(a, b, c); // first second third

// Rest parameter (...): lấy phần còn lại của mảng : trả về 1 mảng
var [first, ...rest] = array;
console.log(first); // first
console.log(rest); // [ 'second', 'third' ]

//2. OBJECT DESTRUCTURING
var obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// destructuring: key phải giống với key của object
var { name, age, city } = obj;
console.log(name, age, city); // John 30 New York

// Rest parameter (...): lấy phần còn lại của object : trả về 1 object
var { name, ...rest } = obj;
console.log(name); // John
console.log(rest); // { age: 30, city: 'New York' }

// 3. REST PARAMETER
function logger(...params) {
  console.log(params);
}

logger(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
