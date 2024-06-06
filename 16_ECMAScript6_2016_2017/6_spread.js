// spread operator(...) is used to split up array elements or object properties
// spread != rest parameter
// spread operator: unpacks elements, bỏ đi dấu ngoặc vuông hoặc ngoặc nhọn
// rest parameter: gom các elements lại, thêm dấu ngoặc vuông hoặc ngoặc nhọn

// 1. Nối 2 arrays dùng spread operator
var array1 = ["first", "second", "third"];
var array2 = ["fourth", "fifth"];
var array3 = [...array1, ...array2];
console.log(array3); // [ 'first', 'second', 'third', 'fourth', 'fifth' ]

// truyen tham so cho ham

// 2. OBJECT SPREAD
var obj1 = {
  name: "John",
  age: 30,
};
var obj2 = {
  city: "New York",
};

var obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { name: 'John', age: 30, city: 'New York' }
