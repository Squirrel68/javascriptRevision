// 1. for
console.log("For loop: ");
for (let i = 0; i < 5; i++) {
  if (i === 1) continue;
  if (i === 3) {
    break;
  }
  console.log(i);
}

let arr = [1, 2, 3, 4, 5];
console.log("For in loop: "); // For in loop qua index cua 1 object (array, object)
for (let i in arr) {
  console.log(i);
}
console.log("For of loop: "); // For of loop qua value cua 1 object (array, object)
for (let i of arr) {
  console.log(i);
}

// 2. while
console.log("While loop: ");
let i = 5;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("Do while loop: ");
let j = 5;
do {
  console.log(j);
  j++;
} while (j < 5);
