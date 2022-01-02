const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/level1", function (req, res) {
  res.render("pages/level1");
});

app.get("/level2", function (req, res) {
  res.render("pages/level2");
});

app.get("/level3", function (req, res) {
  res.render("pages/level3");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
