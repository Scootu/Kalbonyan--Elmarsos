import http from "node:http";
import { requestHandler, someText } from "./routes.mjs";
console.log(someText);

const server = http.createServer(requestHandler);

server.listen(3000);
