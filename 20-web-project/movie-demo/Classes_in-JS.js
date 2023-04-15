
class Vehicle { 
     // here we can omitting constructors a default property created after initialization 
    numWheels = '' ; //defind property and a default value 
    static ValueYear = '1985'; 
    constructor(_wheels) { 
        this.numWheels  = _wheels ; 
    }
    // get and setter 
    get wheels () { 
        return this.numWheels ; 
    }
    set wheels(_wheels) { 
         this.numWheels = _wheels ; 
    }
    
    //Methods 
 static inctanceOf() { 
        console.log(`hi my vehicle is : ${this.numWheels}`);
    }
       inctanceOfPublic() { 
        console.log(`hi my vehicle is : ${this.numWheels} , 2005`);
       }

}

class Person  extends Vehicle { 
  

      person = '' ;
      
      constructor(_wheels,_person) { 
        super(_wheels);
        this.person = _person ; 
      } 
      get person () { 
        return this.person;
      }
      
      /** // this is for indicate that _person must to be a string value 
     * @param {string} _person
     */
      set person(_person) { 
        this.person = _person ;  
      }
      inctanceOf() { 
        console.log(`hi my name is : ${this.person} and my vehicle is : ${this.numWheels} year :${Person.vehicleInctence}`);
    }
    // this method will access only with Person class 
     // we can access static method in Vehicle class because the super here is pesent the Vehicle class 
     static vehicleInctence = super.ValueYear; 
    
}


let car = new Vehicle('inbiza');
let car2 = new Vehicle('maroty') ; 
let person = new Person('Alto','mohammed' );
//car.info = 'defaultValue';
// Specialization a instance of Class 
let defaultValue = '41451Cal'; 

Object.defineProperty(car,'info',{  
    enumerable:true , 
    configurable:true , 
    get() { 
      return  defaultValue ;
    },
    set(_val) { 
        defaultValue  = _val ; 
    }
})

// set the value to car 

// assigning New value to existing 
console.log(car);
console.log(car2);
console.log(person);
// Using Methods 
car.inctanceOfPublic();
car2.inctanceOfPublic();
person.inctanceOf();
/*********************************** */
console.log() ; 
