const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info) {
  console.log(`${level}: ${message}`);
}



module.exports = {log,error,warning,info}; // just export the last one why ? you need to have one export module
