// const add = {
//   result: (a, b) => {
//     return a + b;
//   },
// };
//  function Add() {
//    // constructor
//    // user-definded object-type function constructor
//    // this is a function declaration
//    this.result = (a, b) => {
//      // a property
//      return a + b;
//    };
//    this.name = "10";
//  }
class Add {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  result() {
    return this.a + this.b;
  }
}
// Well there is a diffrence between the function constructor and class in the [[prototype]] the class can access to the prototype value directly without create new instance with new keyword
const add = Add;
// new keyword point the newinstance [[prototype]] to the function constructor prototype
// in another word  if you see the Add().prototype is empty how we can get the property of Add() constructor to the [[prototype]] of newInstance
// and we want to point it to the newInstance
// new operator do this .
// for example
/*In build-in object type function constructor as String is by default you get all the properties of String object when working with string "hello".length = 5
  we can represent what happend by using new keyword to point all properties in String [[prototype]] to the new instance hello like this : 
*/
const hello = new String("hello");
console.log(hello); // 5
const text = String("hello");
console.log(text);
function getMessage() {
  if (!new.target) {
    return { message: "this is a function" };
  }
  this.message = "this is a constructor";
}
const message1 = getMessage();
const message2 = new getMessage();
console.log("message1:", message1.message, "message2:", message2.message);

module.exports = add;
