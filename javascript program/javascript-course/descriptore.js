// for Object descriptore property and method  
// 1. we have 
//Object.defineProperty(obj, propName, {} )

//  2.Object.defineProperties(obj, props) : 






/* ************************************************ */ 
let username = 'anes';// prompt('Entre your name');
let userId =451245 ;  //prompt('Entre your Id number '); 
let obj = {} ; 
Object.defineProperties(obj,{ 
    name:{ 
        
        configurable:true,
        enumerable:false,
        get:() =>{ 
            return 'hello Mr.' + username ; 
        },
        set :(val) =>{ 
          username = val ; 
        }
    },
    Id:{ 
        value:userId,
        writable:true,
        configurable:false,
        enumerable:false
    }
})
// name is no writable so it don't show up in the object 
//intile you call it by : obj name 

console.log(obj);// {Id: 451245} 
// it's value show up by Object.hasOwn(obj,'name') // true 

//Object.hasOwn(obj,'property') static mehtod return true or false 

//Object.getOwnPropertyNames() 
// The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

let arrObjProp = Object.getOwnPropertyNames(obj);
console.log(arrObjProp); // ['name', 'Id'] 


//Object.getOwnPropertyDescriptor() 
//The Object.getOwnPropertyDescriptor() static method 
//returns an object describing the configuration of a specific property on a given object 
//(that is, one directly present on an object and not in the object's prototype chain). 
//The object returned is mutable but mutating it has no effect on the original property's configuration. 

//
let o, d;

o = {
    get foo() {
      return 17;
    },
  };

d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
//configurable: true
//enumerable: true
//get: ƒ foo()
//set: undefined
//[[Prototype]]: Object

/*
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values
*/
/*
Object.values(d)
(4) [ƒ, undefined, true, true]
Object.keys(d)
(4) ['get', 'set', 'enumerable', 'configurable']
*/