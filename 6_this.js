// Ví dụ 1:
console.log(this); // {}
this.a = 37;
console.log(this); // { a: 37 }

// Ví dụ 2:
class Staff {
  constructor(name) {
    this._name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this._name}`);
  }
}

let staff1 = new Staff("John");
staff1.sayHello(); // Hello, my name is John

// Ví dụ 3:
function sayHello() {
  console.log("Hello!");
  console.log(this);
}
sayHello(); // Hello! và {}

// Ví dụ 4:
("use strict");
sayHello(); // Hello! và undefined
