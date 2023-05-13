const express = require("express");
const fs = require("fs");

const app = express();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB call

const db = require("./server").db();

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session

// 3: Views
app.set("views", "views");
app.set("view engine", "ejs");
// BSSR -Backend server side rendering

// 4: Routes

app.post("/create-item", function (req, res) {
  //  TODO:
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;