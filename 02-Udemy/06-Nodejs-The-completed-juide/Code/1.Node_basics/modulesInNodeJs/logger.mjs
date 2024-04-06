const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info) {
  console.log(`${level}: ${message}`);
}

export default log;
export { error, warning, info };
