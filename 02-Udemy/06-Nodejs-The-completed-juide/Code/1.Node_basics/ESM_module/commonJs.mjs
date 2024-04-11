// console.log(module);
import fs from "node:fs"; // ES import for build-in module
// the ESM module import are static , which mean they are executed at 
// parse time . import modules are hoisted  
fs.writeFile("message.txt", "Hello world", "utf-8", (err) => {
  if (err) throw err;
});
