// pm i express jsonwebtoken bcrypt cookie-parser
// create usesr account
// mongoose
// schema
// userCreate - pass - hash - save
// jwt token - cookie \
// log in - token - decrypt - email
const express = require("express");
const app = express();

const userModel = require("./models/user");

const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      res.send(createdUser);
    });

    let token = jwt.sign({ email }, "12345678");
    res.cookie("token", token);
    res.send(createdUser);
  });
});
// check log in
app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("somthing went wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: user.email }, "12345678");
      res.cookie("token", token);
      res.send("yes, you can login");
    } else res.send("No, you can't login!");
  });
});

// logout
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000);
