const http = require("node:http");
const fs = require("node:fs");
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My first write api</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      //save data in file
      fs.writeFileSync("message.txt", message.split("+").join(" "));
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
 
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first write api</title></head>");
    res.write("<body><h1>Hello and welcom to my website</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("local host 3000");
});
