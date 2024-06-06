let sayHello = `Hello "Tome"`;
console.log(sayHello);

let multipleLines = `This is a 
multiple line 
string`;
console.log(multipleLines);

let age = 21;
let myAge = `I am ${age} years old`;
console.log(myAge);

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price + price * VAT).toFixed(2)}`;
console.log(total);

let header = "Header";
let contents = ["Content1", "Content2", "Content3"];
let html = `<h1>${header}</h1><ul>`;
for (let content of contents) {
  html += `<li>${content}</li>`;
}
html += "</ul>";
document.body.innerHTML = html;
