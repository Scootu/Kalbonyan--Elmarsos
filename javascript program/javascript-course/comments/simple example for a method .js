//a method is a property of an object , that can be //accessed just with the obj 
//like : 
const obj = { 
 name:'hello',
  foo() { 
   return console.log(`my name is ${this.name}`);
  }
}

console.log(obj.foo());