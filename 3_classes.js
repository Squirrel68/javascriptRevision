// 1. Classes
class Staff {
  constructor(name, DOB) {
    this._name = name; // _name is a convention to indicate that it is a private property
    this.DOB = DOB;
  }
  age() {
    const year = new Date().getFullYear();
    const dobYear = new Date(this.DOB).getFullYear();
    return year - dobYear;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}

//2. using a class to create an object
const staff1 = new Staff("Alice", "1996-01-01");
const staff2 = new Staff("Bob", "1997-02-02");
console.log(staff1); // Staff { name: 'Alice', DOB: '1996-01-01' }

console.log(staff1.age()); // 28

// 3. Inheritance
class Intern extends Staff {
  constructor(name, DOB, level) {
    super(name, DOB);
    this.level = level;
  }
  pay() {
    return this.level * 1000;
  }
}

let intern1 = new Intern("Charlie", "2003-03-03", 1);
console.log(intern1); // Intern { name: 'Charlie', DOB: '2003-03-03', level: 1 }
console.log(intern1.pay());
console.log(intern1.name); // name nay la goi ham get name cua class Staff, ko phai goi truc tiep property _name
intern1.name = "David";
console.log(intern1.name); // David

// static ?
