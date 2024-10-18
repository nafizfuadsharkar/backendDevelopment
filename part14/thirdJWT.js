// 3. jwt ki , ekhane kibhabe data store korbo or ber korbo, jsonwebtoken
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.get("/", function (req, res) {
  let token = jwt.sign({ email: "nafiz@gmail.com" }, "secretString");
  res.cookie("token", token);
  //   console.log(token);
  res.send("Done");
});

app.get("/read", function (req, res) {
  let data = jwt.verify(req.cookies.token, "secretString");
  console.log(data);
});

app.listen(3000);
