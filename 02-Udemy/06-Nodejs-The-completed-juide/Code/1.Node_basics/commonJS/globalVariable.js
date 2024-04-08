// Create a global property with `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return 10;"); // this `x` refers to global `x`
}

const f1 = createFunction1();

console.log(f1());
