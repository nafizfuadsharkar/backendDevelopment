// authentification and authorization

// user ke profile deyar age check korte hobe , user ke - authentification

// authorized to perform some tasks which are only allowed to be executed by the admin

// server prottek bar bhule jay apni ke, tahole prottek ta kajer jonno ask korbe apni ke?  er jonno ekhane cookies and session dorkar hoy.

// need to learn
// 1. how to set cookie and read cookie
// 2. bcrypt kibhabe use korte hoy password encryption and decryption er jonno
// 3. jwt ki , ekhane kibhabe data store korbo or ber korbo

// set the cookie
// npm i jsonwebtoken bcrypt

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

// npm i cookie-parser 
app.use(cookieParser)

app.get("/", function (req, res) {
  res.cookie("name", "nafiz");
  res.send("done");
});

app.get("/read", function (req, res) {
  console.log(req.cookies)
  res.send("read page");
});










app.listen(3000);
