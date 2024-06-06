// 1 biểu thức là sự kết hợp của các toán hạng và toán tử mà ngôn ngữ lập trình có thể diễn giài và tính toán để ra 1 giá trị nào đó:
// Toán hạng (operand)
// Toán tử (operator):  1 số kiểu
let operand1 = 10;
let operand2 = 5;
// 1. Toán tử số học (Arithmetic Operators)
let sum = operand1 + operand2;
let sub = operand1 - operand2;
let mul = operand1 * operand2;
let div = operand1 / operand2;
let mod = operand1 % operand2;
let pow = operand1 ** operand2;
console.log(sum); // 15
console.log(sub); // 5
console.log(mul); // 50
console.log(div); // 2
console.log(mod); // 0
console.log(pow); // 100000

// 2. Toán tử gán (Assignment Operators)
let operand3 = 10;
operand3 += 5; // operand3 = operand3 + 5;
operand3 -= 5; // operand3 = operand3 - 5;
operand3 *= 5; // operand3 = operand3 * 5;
operand3 /= 5; // operand3 = operand3 / 5;
operand3 %= 5; // operand3 = operand3 % 5;
operand3 **= 5; // operand3 = operand3 ** 5;
console.log(operand3); // 100000

// 3. Toán tử so sánh (Comparison Operators)
let res = operand1 > operand2;
console.log(res); // true
res = operand1 < operand2; // false
res = operand1 >= operand2; // true
res = operand1 <= operand2; // false

let operand4 = "10";
res = operand1 == operand4; // true
console.log(res); // true
res = operand1 === operand4; // false
console.log(res); // false
res = operand1 != operand4; // false
res = operand1 !== operand4; // true

operand1 === operand4 ? console.log("Equal") : console.log("Not equal");

// 4. Toán tử chuỗi (String Operators)
let string1 = "Hello";
let string2 = "World";
// cộng chuỗi
let string3 = string1 + " " + string2;
console.log(string3); // Hello World
// so sánh chuỗi
res = string1 > string2; // false
console.log(res); // false

// 5. Toán tử logic (Logical Operators)
let isTrue = true;
let isFalse = false;
res = isTrue && isFalse; // false
res = isTrue || isFalse; // true
res = !isTrue; // false
console.log(res); // false

// 6. Toán tử xác định kiểu dữ liệu (Typeof Operators)
let type = typeof operand1;
console.log(type); // number
let isInstance = operand1 instanceof String;
console.log(isInstance); // false

// 7. Toán tử bit (Bitwise Operators)
let bit1 = 2; // 10
let bit2 = 3; // 11
res = bit1 & bit2; // AND
res = bit1 | bit2; // OR
res = bit1 ^ bit2; // XOR
res = ~bit1; // NOT
res = bit1 << 1; // Left shift
res = bit1 >> 1; // Right shift
res = bit1 >>> 1; // Zero fill right shift
console.log(res);
