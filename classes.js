class Person {
  constructor(name, age) {
    console.log('creatng obj');
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(this.name + ' ' + this.age);
  }
}

const p = new Person('Ritu', 20);
console.log(p.name);
console.log(p.age);
p.getInfo()