//constructor 
"use strict",

fucntion Person(name, age) {
  this.name = name;
  this.age = age;
}
const john = new Person("John Doe", 30); // declaration as obj
const jane = new Person("Jane Doe", 25);

console.log(`hello :${john.name}`);
console.log(`hello :${john.age}`);
console.log(`hello :${jane.name}`);
console.log(`hello :${jane.age}`);