// primitives ; number ,string ,boolean
// Objects
// function types , parameters

// Primitives

let age: number;

let userName: string;

userName = "Max";
let isInstructor: boolean;

function add(a: number) {
  return a;
}

// let hobbies :null ;

// More complex types

let hobbies: string[];

hobbies = ["sports", "Cooking"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: "Max",
    age: 32,
  },
];

// Type interence

let course: string | number = "React - The Complete Guide";

course = 12214; // this work with union types

// Functions & types

function addTwo(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
// Generics
function insertAtBeginning<T>(array: T[], value: T) { // because we create a generics types typescript will maintain the initial types of paramaters and change the return value baded in the paramaterse types 
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,3,3]; // in this number[]

const updatedArray = insertAtBeginning(demoArray,-1); // [-1,1,2,3]
// and in the function of any will change the initial type 
const stringArray = insertAtBeginning(['a','b','c'],'d');
