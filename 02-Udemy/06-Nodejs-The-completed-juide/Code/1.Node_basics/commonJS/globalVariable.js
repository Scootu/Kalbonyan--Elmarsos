// Create a global property with `var`
var x = 10; // In nodejs this is a treated as local variable not a global variable because the top-level scope in node js is note the global scope

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // this `x` refers to global `x`
}
function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1(); //ReferenceError: x is not defined
const f2 = createFunction2();
console.log(f1());
console.log(f2());
