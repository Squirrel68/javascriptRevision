// 1. Create an array
const fruits = ["Apple", "Banana", "Orange"]; // cách 1
const helloFunction = function () {
  //   console.log("Hello");
  return "Hello";
};
const fruits2 = new Array(
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  12 + 5,
  new Date(),
  helloFunction()
); // cách 2
console.log(fruits);
console.log(fruits2);

// 2. Access an Array item using the index position
console.log(fruits[0]); // Apple
console.log(fruits[fruits.length - 1]); // Orange

fruits[fruits.length] = "Mango"; // thêm vào cuối mảng
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]
fruits.push("Kiwi"); // thêm vào cuối mảng
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango", "Kiwi"]
fruits.unshift("Strawberry"); // thêm vào đầu mảng
console.log(fruits); // ["Strawberry", "Apple", "Banana", "Orange", "Mango", "Kiwi"]

fruits[1] = "Pineapple"; // thay đổi giá trị phần tử thứ 2
console.log(fruits); // ["Strawberry", "Pineapple", "Banana", "Orange", "Mango", "Kiwi"]

fruits.pop(); // xóa phần tử cuối mảng
console.log(fruits); // ["Strawberry", "Apple", "Banana", "Orange", "Mango"]
fruits.shift(); // xóa phần tử đầu mảng
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi"); // thêm vào vị trí 2
console.log(fruits); // ["Apple", "Banana", "Lemon", "Kiwi", "Orange", "Mango"]
fruits.splice(2, 2); // xóa 2 phần tử từ vị trí 2
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// 3. Loop over an Array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 4. Convert an Array to a string
console.log(fruits.toString()); // Apple,Banana,Orange,Mango

// 5. Find the index of an item in the Array
console.log(fruits.indexOf("Banana")); // 1

// 6. Array methods
console.log(fruits.join(" - ")); // Apple - Banana - Orange - Mango
console.log(fruits.concat(["Lemon", "Kiwi"])); // ["Apple", "Banana", "Orange", "Mango", "Lemon", "Kiwi"]
console.log(fruits.slice(1, 3)); // ["Banana", "Orange"]
console.log(fruits.reverse()); // ["Mango", "Orange", "Banana", "Apple"]
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.sort((a, b) => a - b)); // ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.sort((a, b) => b - a)); // ["Orange", "Mango", "Banana", "Apple"]
console.log(fruits.every((fruit) => fruit.length > 5)); // false
console.log(fruits.some((fruit) => fruit.length > 5)); // true
console.log(fruits.filter((fruit) => fruit.length > 5)); // ["Banana", "Orange"]
console.log(fruits.map((fruit) => fruit.length)); // [5, 6, 6, 5]
console.log(fruits.reduce((total, fruit) => total + fruit.length, 0)); // 22
console.log(fruits.reduceRight((total, fruit) => total + fruit.length, 0)); // 22
console.log(fruits.find((fruit) => fruit.length > 5)); // Banana
console.log(fruits.findIndex((fruit) => fruit.length > 5)); // 1
console.log(fruits.includes("Banana")); // true

// 7. Multidimensional Array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
