// const add = {
//   result: (a, b) => {
//     return a + b;
//   },
// };
function Add() {
  this.result = (a, b) => {
    return a + b;
  };
}
module.exports = new Add(); // why is not secure ?
