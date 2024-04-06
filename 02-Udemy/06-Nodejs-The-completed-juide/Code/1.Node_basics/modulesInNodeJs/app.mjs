import log, { error, info, warning } from "./logger.mjs";

log("Hello world ", error);

console.log("%s %s %s", error, info, warning); // because node build in c--
