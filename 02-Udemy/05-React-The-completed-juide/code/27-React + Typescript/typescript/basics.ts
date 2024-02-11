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

