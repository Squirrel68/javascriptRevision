// 1. String
let string1 = "Hello World"; // surround with double quotes
let string2 = 'Hello "Anh Tú"'; // surround with single quotes
console.log(typeof string1); // string
console.log(string2); // Hello "Anh Tú"

// 2. Number
let integerNumber = 10;
let floatNumber = 10.5;
let extraLargeNumber = 123e5; // 12300000
let extraSmallNumber = 123e-5; // 0.00123
let negativeNumber = -10;
console.log(typeof integerNumber); // number
console.log(floatNumber); // 10.5

// 3. Bigint
let bigInteger = BigInt("9007199254740991");
console.log(typeof bigInteger); // bigint

// 4. Boolean
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // boolean
console.log(isFalse); // false
// 5. Undefined
let undefinedVariable;
console.log(typeof undefinedVariable); // undefined
console.log(undefinedVariable); // undefined
// 6. Null
let nullVariable = null;
console.log(typeof nullVariable); // object
console.log(nullVariable); // null
// 7. Symbol
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");
console.log(typeof symbol1); // symbol
console.log(symbol1); // Symbol(symbol1)

// 8. Object
let object1 = {
  name: "Anh Tú",
  age: 21,
};
console.log(typeof object1); // object
console.log(object1); // { name: 'Anh Tú', age: 21 }

let array1 = [1, 2, 3, 4, 5];
console.log(typeof array1); // object
console.log(array1); // [ 1, 2, 3, 4, 5 ]

let date1 = new Date();
console.log(typeof date1); // object
console.log(date1); // curent date: 2024-06-04T08:07:37.390Z
