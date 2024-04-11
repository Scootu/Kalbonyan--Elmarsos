const fs = require("fs");
const add = require("./calculate");
const chalk = require("chalk");
// const result = add.result(5,8)
const result = new add(5, 6).result();
console.log(result); //Output : 13
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("This happend first!");

console.log(chalk.red("This text is red"));
