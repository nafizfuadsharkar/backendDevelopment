// project: select a language, or fill with template, or open a different editor to get started
// initalize a project with npm
// express install

// dynamic routing : 1.dynamic routing 2. how to get data coming from frontend at backend routing

// setting up parsers for form
// setting up ejs for ejs pages
// setting up public static files

// setting up parsers for form
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   res.send("cholche");
// });

app.listen(3000, function () {
  console.log("it's running");
});

// setting up ejs for ejs pages
// ejs: frontend, etar moddhe calculation perfom kore
// npm i ejs
// setup ejs as a view engine
// app.set('view engine','ejs')
// backend e ki render korbe ejs e show korbe.
app.get("/", function (req, res) {
  res.render("index.ejs"); //ejs na likhleo pera nai
});

// setting up public static files
// html css js
app.use(express.static(path.join(__dirname, "public")));
// what is path.join?

// dynamic routing: amra onek routing dekhi, jetar moddhe ektai change hote thake, /author/chaning part 
// browser e jaw, url likho, enter chapo , url route create koro, response pathao anything. dynamic part er age route e dynamic lagai dibo. 

app.get("/profile/:dynamic", function (req, res) {
  // jodi dynamic part ta amra route e chai tahole req.params dibo. 
  // req.params.dynamic
  res.send(req.params.dynamic);
});

app.get("/profile/:username/:age", function (req, res) {
  res.send(req.params.dynamic);
});
