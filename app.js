import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import router from "./routes/index"

const hostname = "127.0.0.1";
const port = 3000;
const app = express(); // setup express application
const server = http.createServer(app);

app.use(logger("dev")); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
