const express = require("express");
const app = express();
const http = require("http");
// 1

app.use(express.static("public"));
app.use(express.json());

// 2: Session

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");
// BSSR -Backend server side rendering

// 4: Routes
app.get("/hello", function (req, res) {
  res.end("<h1> Hello world!</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1> Siz sovg'alar bo'limidasiz!</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
