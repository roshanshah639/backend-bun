import { createServer } from "node:http";
import dotenv from "dotenv";

// dot env config
dotenv.config({ path: "./.env" });

// create server
const server = createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Tea | Home Page");
  } else if (req.url === "/iced-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Iced Tea | Tea");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404| Page Not Found");
  }
});

// server config
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server is Listening On : http://${HOST}:${PORT}`);
});
